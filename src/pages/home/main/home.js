import React, { useEffect, useState } from "react"
import ContactCards from "../whyUs/contact-cards"
import Services from "../services/services"
import Top from "../top/top"
import "./home.css"
import HomeCode from "./home-code"
import Products from "../products/products"
import { Container } from "react-bootstrap"
const Home = ({ lang }) => {
    const [used_lang, set_lang] = useState(require(`./home-lang/${lang}.json`));

    useEffect(() => {
        let current_lang = require(`./home-lang/${lang}.json`)
        set_lang(current_lang)
    })




    useEffect(() => {
        document.title = "Techsquare | Home"
        window.scrollTo(0, 0, { duration: 0 })
    }, [])
    //animacje, które wykonują się tylko, gdy są widoczne na ekranie
    HomeCode()

    return (
        <div style={{ backgroundColor: 'rgba(39, 40, 44, 1)' }}>
            <div className="paleta-con">
                <Top lang={used_lang.top} />
                <Services lang={lang} />
                <Products lang={used_lang.Products} />
                <Container fluid className=" py-5 bottom-con">
                    <Container style={{zIndex: "2", position: "relative"}} className="mb-3">


                        <div className="mb-5 pb-2 pt-5" >
                            <h3 className="pb-2 fw-semibold fs-1" style={{ position: "relative", letterSpacing: ".1rem" }}>{used_lang.bottomTitle}</h3>
                            <div className="pointer mb-5" />
                        </div>
                        <ContactCards lang={used_lang.whyUs} />
                    </Container>
                </Container>
            </div>
        </div>
    )
}
export default Home