import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Shadows from "../services/services-moduls/shadows";
import "./privacy.css"
const Privacy = ({lang}) => {
    console.log(lang)
    const data = require(`./privacy-lang/${lang}.js`)
    useEffect(() => {
        document.title = "Techsquare | Privacy policy"
    }, [])

    return (

        <div className="">

            <div className=" main d-flex " data-aos="fade-up">
                <Container className="privacy-top mb-5 text-center d-flex align-items-center" style={{ height: "250px" }}>
                    <Shadows />
                    <Container fluid className="d-flex justify-content-center "
                        style={{ zIndex: "3" }}>
                        <h1 className="pb-5" style={{ fontSize: "3.1rem" }}>{data["data"].title}</h1>
                    </Container>
                </Container>
            </div>
            <Container fluid
                className="p-0 m-auto "
                style={{ maxWidth: "2100px" }}>
                <div className="m-auto privacy-tekst"
                    style={{ position: "relative", overflow: "hidden" }}>
                    <Container className="my-5 bg-dark p-4">
                        <Container fluid className="d-flex justify-content-center  "
                            style={{ zIndex: "3", position: "relative" }}>
                            {data["data"].text}
                        </Container>
                    </Container>
                </div>
            </Container >
        </div >
    )
}
export default Privacy;