import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap"
import "./top.css"
import CustomButton from "../../../components/custom-button/custom-button";
const Top = ({ lang }) => {
    return (
        <div className="paleta-gora pt-5 ">
            <Container className="pt-4">
                <Row className="pt-5" >
                    <Col className="col-12 col-lg-10 zindex-10 pb-3">
                        <h1 className="ubuntu-hard">
                            {lang[0]}
                        </h1>
                        <p className="ubuntu-light">
                            {lang[1]}
                        </p>
                        <a href="#ourServices">

                            <CustomButton tabindex={25} arr={true} text={lang[2]} className="mt-4 mb-5 px-5 py-0 bg-50px" />
                        </a>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Top