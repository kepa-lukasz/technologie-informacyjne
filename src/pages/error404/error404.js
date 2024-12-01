import "./error404.css"
import wave from "../../components/photos/wave404.png"
import { IconError404 } from "@tabler/icons-react"
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CustomButton from "../../components/custom-button/custom-button"

const Er404 = () => {
    useEffect(()=>{
        document.title = "Techsquare | Error 404"
    }, [])
    const responses = [
        "Ups, coś poszło nie tak... Brak wyników! 😅🔍",
        "Coś poszło nie tak... Nikogo tu nie ma!",
        "Brak rezultatów, ale my nadal tu jesteśmy! 🕵️‍♂️",
        "Wyprawa zakończona fiaskiem, nie znaleziono zaginionego zasobu",
        "Przepraszamy, ale zasób jest na wakacjach od środy. Wróci wkrótce 😎"
    ];

    const [quote, getQuote] = useState(responses[Math.floor(Math.random() * (responses.length))]);

    return (
        <div >
            <div className="errBody primary" >
                <IconError404 className="bgc" size={526} />
                <div className="errTitle" >
                    <div data-aos="fade-up">

                        <h1 data-aos="fade-up">
                            {quote}
                        </h1>
                        <br />
                        <CustomButton
                            href="https://work.techsquare.pl/"
                            className=" w-50 mx-auto"
                            arr={true} text="Powrót do strony głównej"
                        />
                    </div>
                </div>
                <img className="wave" src={wave} alt="" />
            </div>
        </div>
    )
}

export default Er404;