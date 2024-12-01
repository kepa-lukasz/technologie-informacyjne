import React, { useEffect } from "react"
import { Col, Row, Container } from "react-bootstrap";
const Steps = ({ properties }) => {
    const icons = {
        "doradztwo" :
        <svg width={50} height={50} viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <rect y="0.25" width="72" height="72" rx="5"  />
            <path d="M36 53.5C45.625 53.5 53.5 45.625 53.5 36L58.75 43" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M36 18.5C26.375 18.5 18.5 26.375 18.5 36L13.25 29" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M30.75 44.75H16.75V53.5H30.75V44.75Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M34.25 58.75H13.25L16.75 53.5H30.75L34.25 58.75Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M48.25 30.75C53.0825 30.75 57 26.8325 57 22C57 17.1675 53.0825 13.25 48.25 13.25C43.4175 13.25 39.5 17.1675 39.5 22C39.5 26.8325 43.4175 30.75 48.25 30.75Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
            <path d="M48.25 30.75C50.183 30.75 51.75 26.8325 51.75 22C51.75 17.1675 50.183 13.25 48.25 13.25C46.317 13.25 44.75 17.1675 44.75 22C44.75 26.8325 46.317 30.75 48.25 30.75Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
        </svg>
        }
    const steps = properties.map((el) => {
        return (
            <Col className="px-4 col-12 col-lg-6 d-flex mb-3" >
                <Row className="d-flex" data-aos="fade-up" data-aos-delay={el.delay}>
                    <div className="step-circle-holder col-12 col-sm-3 mb-3" >
                        <div>
                            {(icons[el.number])? icons[el.number] : el.number }
                        </div>
                    </div>
                    <div className="col-12 col-sm-9">
                        <h3>{el.title}</h3>
                        <p className={`p-trigger${el.number}`} style={{ fontSize: "0.85rem" }}>{el.text}</p>
                    </div>
                </Row>

            </Col>
        )
    })


    return (

        <Container className="pt-4 d-flex flex-wrap mb-5">
            {steps}
        </Container>
    )
}
export default Steps;