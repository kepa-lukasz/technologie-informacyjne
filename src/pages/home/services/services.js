import React, { createElement, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCreator from "./serviceModule";
import "./service.css";


const hide_elements = () => {
    document.querySelectorAll(".service-selector").forEach((el) => {
        el.classList.add("hide")
        el.classList.remove("show")
    })
}
//pokazuje tytuły w odpowiedniej kolejności
const show_elements = () => {
    const elements = document.querySelectorAll(".service-selector")
    setTimeout(() => {
        elements[0].classList.remove("hide")
        elements[0].classList.add("show")
        elements[2].classList.remove("hide")
        elements[2].classList.add("show")
    }, 400)
    setTimeout(() => {
        elements[1].classList.remove("hide")
        elements[1].classList.add("show")

    }, 300)
}


const Services = ({ lang }) => {
    const maincon = useRef();
    const dupa = useRef();

    //refs used to display cards 
    let tab = [0, 1, 2, 3]
    const big = useRef()
    const small = useRef()
    const single = useRef()

    const [used_lang] = useState(require(`./lang-services/${lang}.json`));

    //stan początkowy tytułów(wielkości firmy) i kart z usługami
    const [help_list, set_help_list] = useState([used_lang.titles[1], used_lang.titles[2], used_lang.titles[3]])
    const [display_options, set_options] = useState(
        [
            <h3 role="tab" ref={big} className="service-selector opacity-0" onClick={(event) => { changeServices(1, event) }} >{used_lang.titles[1]}</h3>,
            <h3 role="tab" ref={single} className="service-selector opacity-0" onClick={(event) => { changeServices(3, event) }}>{used_lang.titles[2]}</h3>,
            <h3 role="tab" ref={small} className="service-selector opacity-0" onClick={(event) => { changeServices(2, event) }}>{used_lang.titles[3]}</h3>
        ]
    )








    const [show_services, setShowServices] = useState(<div className="main"></div>)
    const [whichServices, setServices] = useState(3);









    let services_to_show = "loading..."


    //zmiana kolejności opcji, kilknięta opcja leci na środek
    const change_order = (idx, event) => {




        setTimeout(() => {
            let content_list = [...help_list]

            let list_idx = content_list.indexOf(event.target.innerHTML)

            let tmp = content_list[1]
            content_list[1] = content_list[list_idx]
            content_list[list_idx] = tmp;
            set_help_list(content_list)

            let options_tab = [...display_options]
            tmp = options_tab[list_idx]
            options_tab[list_idx] = options_tab[1]
            options_tab[1] = tmp;

            set_options(options_tab)
            document.querySelectorAll(".service-selector")[1].classList.add("text-decoration-underline")
        }, 250)



        setServices(idx)

    }
    //funkcja onclick
    const changeServices = (idx, event) => {
        if (!event.target.classList.contains("text-decoration-underline")) {

            hide_elements()
            change_order(idx, event)
            show_elements()
        }

    }
    useEffect(() => {
        document.querySelector(".main").classList.remove("reload");
        setTimeout(() => {
            document.querySelector(".main").classList.add("reload");
        }, 50)
    }, [show_services])

    //ładowanie kart przyporządkowanych do rozmiaru firmy
    useEffect(() => {

        document.querySelectorAll(".service-selector").forEach((el) => { el.classList.remove("opacity-0") })

        //które usługi z listy pokazać zależnie od wyboru usera (w tablicy indeksy usług)
        switch (whichServices) {
            //cases:
            //1 => duże
            //2 => średnie
            //3 => indywidualni

            //tab elements:
            //0 => uxui
            //1 => strony
            //2 => support
            //3 => mobile
            case 1:
                tab = [2, 3, 0, 1, -1]
                break;
            case 2:
                tab = [2, 3, 0, 1]
                break;
            case 3:
                tab = [2, 3, 0, 1]
                break;
            default:
                tab = [2, 3, 0, 1]
        }

        services_to_show = used_lang.data.map((el) => {
            let from_left = false;
            from_left = !from_left;
            if (tab.length == 4) {

                return (
                    <div className="w-100 d-flex justify-content-center">
                    <ServiceCreator
                        key={el.title}
                        aos={(from_left) ? 'fade-left' : "fade-right"}
                        title={el.title}
                        show={tab.includes(el.id) ? " show" : " "}
                        svg={el.svg}
                        img={el.img}
                        bg={el.bg}
                        link={el.link}
                        color={el.color}
                        desc={el.desc}
                    />
                    </div>
                )
            }
            else {
                return (
                    <div className={(el.id == 1)? "w-100 d-flex justify-content-center invisible " : "w-100 d-flex justify-content-center"}>

                        <ServiceCreator
                            key={el.title}
                            aos={(from_left) ? 'fade-left' : "fade-right"}
                            title={el.title}
                            show={tab.includes(el.id) ? "mb-0 show" : ""}
                            svg={el.svg}
                            img={el.img}
                            bg={el.bg}
                            link={el.link}
                            color={el.color}
                            desc={el.desc}
                        />
                    </div>
                )
            }
        })

        setShowServices(<Container fluid className="main d-flex flex-wrap justify-content-center">{services_to_show} </Container>)
    }, [whichServices, used_lang])
    //dodaj podkreślenie do środkowego tytułu i go powiększ
    useEffect(() => {
        document.querySelectorAll(".service-selector")[1].classList.add("text-decoration-underline")
    }, [])
    return (

        <Container key={lang} id="ourServices" fluid className="p-0 m-0 pt-3">
            <div className="lower-paleta pb-5 mb-5">
                <div className="anchor"></div>
                <Container>
                    <Row className="mt-5 d-flex align-items-stretch flex-wrap justify-content-center">
                        <div className="mb-5">
                            <h2 className="pt-1 pb-2 fw-semibold fs-1 " style={{ position: "relative", letterSpacing: ".1rem" }}>{used_lang.titles[0]}</h2>
                            <div className="pointer mb-2" />
                            <p className="fs-6 col-12 col-lg-10">{used_lang.desc}</p>
                        </div>

                        <Row className="text-center mb-5 pb-5  justify-content-center">

                            <Col className="col-10 col-md-4 my-3">
                                {display_options[0]}
                            </Col>

                            <Col className="col-10 col-md-4 my-3 text-white">
                                {display_options[1]}
                            </Col>

                            <Col className="col-10 col-md-4 my-3">
                                {display_options[2]}
                            </Col>
                            <div className="ps-0">
                                <p className="col-12 col-lg-10  text-start pt-5 ps-0 fs-5">{used_lang.paleteSubtitle[whichServices - 1]}</p>
                            </div>
                        </Row>


                        {show_services}

                    </Row>
                </Container>
            </div>
        </Container >
    )
}
export default Services