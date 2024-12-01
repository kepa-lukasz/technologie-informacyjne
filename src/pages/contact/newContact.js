import React, { useState, useRef, useEffect } from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import "./contact.css"

import { ValidateData } from "./contact-vali";

import LogoWhite from "../../components/photos/logo-white.png"
import Forms from "./forms/form"
import "../services/services-moduls/squares"
import FormBlockMain from "./forms/test/form-block1"
import { Box, Step, StepButton, StepLabel, Stepper, Typography } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button"
import FormBlockSec from "./forms/test/form-block2"

const steps = ['Wybierz model działalności', 'Zakres działań', 'Formularz kontaktowy'];


function Contact({source}) {
    useEffect(() => {
        document.title = "Techsquare | Contact"
    }, [])

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
        if (checker && nameStatus == 0) setColor("#D00000")
        else if (checker && msgStatus == 1 && checkboxChecker) setColor("green")
        else setColor("#D00000")

    }, [nameStatus, mailStatus, telStatus, msgStatus, checkboxChecker, checkboxChecker])


    return (

        <Container fluid className="contactBody p-0 pt-5">
            <Container className="py-5 d-flex px-0" data-aos="fade-up" data-aos-delay="150" style={{ zIndex: "15", position: 'relative' }}>
                <Container className="FormBody px-2 w-100 mx-0 mx-sm-auto px-sm-5 py-5">
                    <h1>Formularz kontaktowy</h1>
                    <Box sx={{ width: '100%' }}>
                        {/* <img className="backgroundLogo" style={{ paddingBottom: "70%" }} src={LogoWhite} alt="techsquare-logo" /> */}

                        <form data-aos="zoom-in-up" className="my-4">
                            <div className="d-flex p-0" >
                                <Row>
                                    <Col className="col-12 p-1 p-md-2 d-flex flex-wrap">
                                        <Col className="col-12 px-2">

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

                                        <Col className=" col-12 px-2">

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
                                        <Col className="mx-auto col-12  px-2">

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

                            <div className="mt-3 px-0 flex-wrap d-flex ">

                                <div className="d-flex  col-12 col-md-8 col-lg-9 col-xl-10">
                                    <input className="check mb-auto" type="checkbox" ref={checkBox} onInput={(event) => { setCheckboxChecker(event.target.checked) }} />
                                    <div className="w-55">
                                        <p className="fw-light" style={{ fontSize: '10px' }}>Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania przez wysłanie wiadomości e-mail na adres biuro@airaddction.pl. Administratorem danych osobowych jest Air Addiction Sp. z o.o. z siedzibą ul. Szpacza 18-20, 51-417 Wrocław</p>
                                    </div>
                                </div>
                                <br />
                                <div className="w-100 d-flex justify-content-start">
                                    <CustomButton style={{ maxHeight: "min-content" }} shadow={whichColor} text="prześlij" arr={true} className="px-4" />
                                </div>

                            </div>
                        </form>


                    </Box>
                </Container>

            </Container>
        </Container>
    )
}

export default Contact