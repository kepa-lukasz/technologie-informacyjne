import React, { useState, useRef, useEffect } from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import CustomButton from "../../../../components/custom-button/custom-button";

export default function FormBlockGender({ genderCallback }) {

    const [selected, setSelectedStatus] = useState(false);

    const genderSelected = (genderID) => {
        genderCallback(genderID);
        setSelectedStatus(true)
    }

    return (
        <>
            {
                (!selected) ?
                    <Container data-aos="zoom-in-up" className="mb-4">
                        <h2 className="text-center mb-5">
                            Jak mamy się do ciebie zwracać?
                        </h2>
                        <Row className="text-center g-3 d-block">
                        <CustomButton style={{ maxHeight: "min-content" }} onClick={() => genderSelected(1)} text="Pan" arr={true} className="w-50 mx-auto my-1 px-4" />
                            <p id="or" className="mx-auto">czy</p>
                        <CustomButton style={{ maxHeight: "min-content" }} onClick={() => genderSelected(2)} text="Pani" arr={true} className="w-50 mx-auto my-1 px-4" />

                        </Row>
                    </Container>
                    :
                    <></>
        }

        </>
    )
}