import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import CustomButton from "../../../components/custom-button/custom-button"
import Aos from "aos";
const Bottom = ({ properties }) => {

    let star = (properties.star) ? <span style={{ color: "#EC12FF" }}>*</span> : null

    return (
        <Container className="justify-content-center mb-5 text-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
        >
            <div style={{maxWidth : "450px"}} className="m-auto">

                <CustomButton
                    href={properties.link}
                    style={{ maxWidth: "min-content" }}
                    className="mb-4 px-5 py-2 col-12 m-auto"
                    text={properties.buttonText}
                    arr={true}
                />
            </div>
            <br/>
            <p className="text-center mt-4">{star}{properties.text}</p>
        </Container>
    )
}
export default Bottom;