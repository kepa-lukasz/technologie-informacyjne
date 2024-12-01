import React, { useState, useEffect } from "react";
import "../ourProjects/projectStyles.css"

import mateupIcon from "../../images/mateup.png"
import Aps from "../home/products/productModule";
import mateupImg from "../../images/mateup_img.png"
import Contact from "../contact/newContact";


const Mateup = ({ lang }) => {

    const [used_lang, set_lang] = useState(require(`./mateup-lang/${lang}.json`));

    useEffect(() => {
        let current_lang = require(`./mateup-lang/${lang}.json`)
        set_lang(current_lang)

    })

    return (
        <div id="realizacje" className="d-flex justify-content-center mt-5 flex-wrap" style={{ minHeight: "70vh", backgroundColor: 'rgba(39, 40, 44, 1)' }}>
            <div className="main" style={{ maxWidth: "1700px", width: "100vw", overflow:"hidden" }}>
                <div className="cien cien1" />

                <div className="cien cien2" />
                <div className="cien cien3" />

                <div className="cien cien4" />
                <div className="mx-5 mt-5">
                    <h1 className="position-relative">{used_lang[0].header}</h1>
                    <div className="mx-md-5 my-5">

                        <Aps
                            title='MATEUP'
                            icon={mateupIcon}
                            buttonText="przejdź na stronę"
                            text="Aplikacja umożliwia wyszukiwanie znajomych do wspólnej gry poprzez filtrowanie wyników na podstawie wspólnych gier, preferowanego języka komunikacji oraz płci. "
                            desc="Dzięki temu użytkownicy mogą łatwo znaleźć osoby o podobnych zainteresowaniach, co pozwala na bardziej satysfakcjonującą grę online!"
                            bgc='linear-gradient(125deg, #1560D1 0%, #0E3A8D 100%)'
                            img={mateupImg} />
                        <div id="contact" className="mx-0 px-0 d-flex justify-content-center">
                            <Contact source="mateup" />
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}
export default Mateup;