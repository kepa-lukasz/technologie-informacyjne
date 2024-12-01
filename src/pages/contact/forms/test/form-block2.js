import React, { useState, useRef, useEffect } from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import FormBlockGender from "./form-block3";
import CustomButton from "../../../../components/custom-button/custom-button";


const servicesList = [
    { id: 0, name: "Web Dev", description: "Lorem ipsum dolor" },
    { id: 1, name: "Mobile Dev", description: "Lorem ipsum dolor" },
    { id: 2, name: "UI/UX Design", description: "Lorem ipsum dolor" },
    { id: 3, name: "Copywriting", description: "Lorem ipsum dolor" },
    { id: 4, name: "IT support", description: "Lorem ipsum dolor" }
]
const companyServices = [
    //male i srednie
    [
        servicesList[0],
        servicesList[1],
        servicesList[2],
        servicesList[3]
    ],
    //duze i instytucje
    [
        servicesList[1],
        servicesList[2],
        servicesList[3]
    ],
    //indywidualny
    [
        servicesList[2],
        servicesList[3],
        servicesList[4]
    ]
]

export default function FormBlockSec(props) {

    const [selected, switchSelectionStatus] = useState(false);

    const [servicesArr, setNewServices] = useState(
        companyServices[props.companyID]
    );
    const [serviceID, setActiveServiceID] = useState(0);

    const updateView = (id) => {
        setActiveServiceID(2)
        switchSelectionStatus(!selected)
        props.switchStepper(2)
        allStatesSelected()
    }

    const allStatesSelected = () => {
        props.allStateCallback(
            {
                service: serviceID
            }
        );
    }

    return (
                    <Container data-aos="zoom-in-up" className="mb-4">
                        <h2 className="text-center mb-4">
                            Wybierz rodzaj usługi
                        </h2>
                        <div className="text-center g-3">
                            {
                                servicesArr.map(serviceData => (
                                    <CustomButton style={{ maxHeight: "min-content" }} onClick={() => updateView(serviceData.id)} text={serviceData.name} arr={true} className="w-75 mx-auto my-3 px-4" />
                                    // <p className="selectionButton" onClick={() => updateView(serviceData.id)}>{serviceData.name}</p>
                                ))
                            }
                        </div>
                    </Container>
    )
}