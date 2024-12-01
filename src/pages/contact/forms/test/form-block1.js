import React, { useState, useRef, useEffect } from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import FormBlockSec from "./form-block2";

import "./form.css";


import { ValidateData } from "../../contact-vali";

import CustomButton from "../../../../components/custom-button/custom-button"
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

const steps = ['rodzaj działalności', 'rodzaj usługi', 'zwroty grzecznościowe'];

export default function FormBlockMain() {

    const [isSelected, switchSelectionStatus] = useState(false);
    const [selectionID, setSelection] = useState(0);
    const updateStatus = (id) => {
        setSelection(id);
        switchSelectionStatus(!isSelected);
        setActiveStep(1);
    }
    const [selectedOBJ, updateSelectedOBJ] = useState({
        gender: 1,
        service: 1
    })
    const [selectedAllOptions, setSelectionStatus] = useState(false);

    const ResetStatus = ()=>{
        switchSelectionStatus(!isSelected);
        setSelectionStatus(false)
        setActiveStep(0);
    }

    const getContactForm = (obj) => {
        updateSelectedOBJ(obj);
        setSelectionStatus(true);
        setActiveStep(3);
    }




    const arrow = <svg style={{ minWidth: "10px" }} width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.32731 11L6.45231 10.1364L10.0546 6.53409H0.725037V5.28409H10.0546L6.45231 1.69318L7.32731 0.818182L12.4182 5.90909L7.32731 11Z" fill="white" />
    </svg>

    let checker
    const [checkboxChecker, setCheckboxChecker] = useState(false)
    const [whichColor, setColor] = useState();
    const [nameStatus, setNameStatus] = useState(0);
    const [mailStatus, setMailStatus] = useState(0);
    const [telStatus, setTelStatus] = useState(0);
    const [msgStatus, setMsgStatus] = useState(0);



    const wrongName = useRef() //referencje do wiadomości o walidacji z szerokiej wersji formularza
    const wrongMail = useRef()
    const wrongTel = useRef()
    const wrongMsg = useRef()

    // const wrongNameM = useRef()  //referencje do wiadomości o walidacji z mobilnej wersji formularza
    // const wrongMailM = useRef()
    // const wrongTelM = useRef()
    // const wrongMsgM = useRef()


    const checkBox = useRef()
    // const checkBoxM = useRef()

    const timeout = 1000 // wiadomość pojawia się po sekundzie niepoprawnego inputa

    //show info about validation
    async function showInfo(type, input, ref_casual, ref_mobile) {
        setTimeout(() => {
            if (ValidateData(type, input) === 2) {
                ref_casual.current.classList.add("show-info");
                // ref_mobile.current.classList.add("show-info");
            }
            else {
                ref_casual.current.classList.remove("show-info");
                // ref_mobile.current.classList.remove("show-info");
            }
        }, timeout)
    }

    const setInputStatus = (input, type) => {
        const returningVal = ValidateData(type, input)
        switch (type) {
            default:
                break;
            case 0:
                //name
                setNameStatus(returningVal)
                showInfo(type, input, wrongName, "wrongNameM");
                break;
            case 1:
                //e-mail
                setMailStatus(returningVal)
                showInfo(type, input, wrongMail, "wrongMailM");
                break;
            case 2:
                //msg
                setMsgStatus(returningVal)
                showInfo(type, input, wrongMsg, "wrongMsgM");
                break;
            case 3:
                //tel
                setTelStatus(returningVal)
                showInfo(type, input, wrongTel, "wrongTelM");
                break;
        }
    }
    useEffect(() => {
        //jeżeli wszystkie inputy są puste to kolor default,
        //jeżeli wszystkie inputy są dobrze wypełnione, to kolor zielony
        //inaczej kolor czerwony (przynajmniej jeden input jest źle wypełniony)
        // console.log(checkboxChecker)
        checker = nameStatus == mailStatus && telStatus == msgStatus && nameStatus == telStatus
        if (checker && nameStatus == 0) setColor("rgba(122, 57, 197, 1)")
        else if (checker && msgStatus == 1 && checkboxChecker) setColor("green")
        else setColor("#D00000")

    }, [nameStatus, mailStatus, telStatus, msgStatus, checkboxChecker, checkboxChecker])


    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };





    return (
        <>
            {/* FORMULARZ wersja md/lg */}

            <Container className="FormBody px-2 px-sm-5 py-5">

                <Stepper className="mb-5" activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {

                    (!isSelected ?
                        <>
                            <header>
                                <h2 className="text-center mb-5">
                                    Wybierz rodzaj działalności
                                </h2>
                            </header>
                            <Row className="text-center g-3 d-block">
                                <CustomButton style={{ maxHeight: "min-content" }} onClick={() => updateStatus(0)} text="Małe i średnie firmy" arr={true} className="w-75 mx-auto px-4" />
                                <CustomButton style={{ maxHeight: "min-content" }} onClick={() => updateStatus(1)} text="Duże firmy i insytucje" arr={true} className="w-75 mx-auto px-4" />
                                <CustomButton style={{ maxHeight: "min-content" }} onClick={() => updateStatus(2)} text="Klient indywidualny" arr={true} className="w-75 mx-auto px-4" />
                            </Row>
                        </>
                        :
                        <>
                            <CustomButton style={{ maxHeight: "min-content", zIndex: "999", position: 'absolute !important', top: '20px', left: '20px' }}
                                onClick={()=>ResetStatus()}
                                text="RESETUJ"
                                arr={false}
                                className="px-4 mb-2" />
                            <FormBlockSec companyID={selectionID} switchStepper={setActiveStep} allStateCallback={getContactForm} />
                        </>)
                }
                {
                    !selectedAllOptions ? <></>
                        :
                        <form data-aos="zoom-in-up" className="my-4">
                            <div className="d-flex  p-0">
                                <Row>
                                    <Col className="col-12 p-1 p-md-2 d-flex flex-wrap">
                                        <Col className="col-12 col-md-6  px-2">

                                            <label className="w-50" for="name">Imię&nbsp;i&nbsp;nazwisko</label>
                                            <input className={`inp 
            
                ${nameStatus === 1 ? "inpCorrect"
                                                    // if correct status ^
                                                    :
                                                    (nameStatus === 0 ? ""
                                                        // if not, check if it's empty ^
                                                        :
                                                        // else return error \/
                                                        "inpErr")}`}
                                                onInput={e => setInputStatus(e.target.value, 0)} name="name" type="text" /> <br />

                                            <div className="p-0 m-0 col-12 w-100  align-self-end msglabel" style={{ position: "realtive" }} >
                                            </div>
                                            <label ref={wrongName} className="validation mt-0 pt-0"> &nbsp;Minimum&nbsp;4&nbsp;znaki</label><br />

                                        </Col>
                                        <Col className=" col-12 col-md-6 px-2">

                                            <label for="tel" >Sektor</label><br />
                                            <input className={`inp 
            ${telStatus === 1 ? "inpCorrect"
                                                    // if correct status ^
                                                    :
                                                    (telStatus === 0 ? ""
                                                        // if not, check if it's empty ^
                                                        :
                                                        // else return error \/
                                                        "inpErr")}`}
                                                // onInput={e => setInputStatus(e.target.value, 3,)} 
                                                name="tel" type="text"
                                            />
                                            <br />
                                            <div className="p-0 m-0 col-12 w-100  align-self-end msglabel" style={{ position: "realtive" }} >
                                            </div>
                                            <label ref={wrongTel} className="validation mt-0 pt-0"> &nbsp;niepoprawny&nbsp;nr&nbsp;telefonu</label><br />
                                        </Col>
                                        <Col className=" col-12 col-md-6 px-2">

                                            <label for="mail" >Adres e-mail</label><br />
                                            <input className={`inp 
            ${mailStatus === 1 ? "inpCorrect"
                                                    // if correct status ^
                                                    :
                                                    (mailStatus === 0 ? ""
                                                        // if not, check if it's empty ^
                                                        :
                                                        // else return error \/
                                                        "inpErr")}`}
                                                onInput={e => setInputStatus(e.target.value, 1)} name="mail" type="mail" />
                                            <br />
                                            <div className="p-0 m-0 col-12 w-100  align-self-end msglabel" style={{ position: "realtive" }} >
                                                <label ref={wrongMail} className="validation mt-0 pt-0"> &nbsp;niepoprawny&nbsp;email</label><br />
                                            </div>
                                        </Col>
                                        <Col className=" col-12 col-md-6 px-2">

                                            <label for="tel" >Telefon</label><br />
                                            <input className={`inp 
            ${telStatus === 1 ? "inpCorrect"
                                                    // if correct status ^
                                                    :
                                                    (telStatus === 0 ? ""
                                                        // if not, check if it's empty ^
                                                        :
                                                        // else return error \/
                                                        "inpErr")}`}
                                                onInput={e => setInputStatus(e.target.value, 3,)} name="tel" type="text" />
                                            <br />
                                            <div className="p-0 m-0 col-12 w-100  align-self-end msglabel" style={{ position: "realtive" }} >
                                            </div>
                                            <label ref={wrongTel} className="validation mt-0 pt-0"> &nbsp;niepoprawny&nbsp;nr&nbsp;telefonu</label><br />
                                        </Col>

                                    </Col>
                                    <Col className="col-12 d-flex flex-wrap  px-3">
                                        <label for="">Twoja&nbsp;wiadomość</label>

                                        <textarea className={`w-100 mb-0 pb-0 textcon
                ${msgStatus === 1 ? "inpCorrect"
                                                // if correct status ^ 
                                                :
                                                (msgStatus === 0 ? ""
                                                    // if not, check if it's empty ^
                                                    :
                                                    // else return error \/
                                                    "inpErr")}`}
                                            onInput={e => setInputStatus(e.target.value, 2)} />
                                        <div className="p-0 m-0 w-100  align-self-end  " style={{ position: "realtive" }} >
                                            <label ref={wrongMsg} className="validation mt-0 pt-0 flex-nowrap" > &nbsp;minimum&nbsp;50&nbsp;znaków</label><br />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="mt-3 d-flex px-0 flex-wrap">

                                <div className="d-flex  col-12 col-md-8 col-lg-9 col-xl-10">
                                    <input className="check mb-auto" type="checkbox" ref={checkBox} onInput={(event) => { setCheckboxChecker(event.target.checked) }} />
                                    <div className="w-55">
                                        <p className="fw-light" style={{ fontSize: '10px' }}>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania przez wysłanie wiadomości e-mail na adres biuro@airaddction.pl. Administratorem danych osobowych jest Air Addiction Sp. z o.o. z siedzibą ul. Szpacza 18-20, 51-417 Wrocław</p>
                                    </div>
                                </div>
                                <div className=" col-12 col-md-4 col-lg-3 col-xl-2 justify-content-end d-flex align-items-start">
                                    <CustomButton style={{ maxHeight: "min-content" }} shadow={whichColor} text="prześlij" arr={true} className="ms-auto px-4" />

                                </div>
                            </div>
                        </form>

                }

            </Container >
        </>
    )
}