import { Col, Row } from "react-bootstrap";
import "./product.css";
import CustomButton from "../../../components/custom-button/custom-button"
import { Tilt } from "react-tilt";

import appstore from "../../../images/Download_on_the_App_Store_Badge.svg"
import googleplay from "../../../images/GetItOnGooglePlay_Badge_Web_color_English.png"

export default function Aps(props) {

    //prop states
    // title -> nazwa projektu <- string 
    // desc -> opis projektu <- string 
    // link -> link do projektu (później będzie) <- jakiś string kurde ten
    // tag -> !! array obiektów !! tag'ów 

    // img -> zdjęcię grafiki <- import

    // bgc -> kolor tła #FFFFFF lub linear-gradient(125deg, #FFFFFF 0%, #FFFFFF 100%) <- w stringu
    
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            6,     // max tilt rotation (degrees)
	perspective:    3000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          5000,   // Speed of the enter/exit transition
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    reset: false
}

    return (
        <Tilt options={defaultOptions}>

        <div className="productBody p-0 mx-2 px-3 w-100 pt-3 px-md-4" style={{ background: props.bgc }} data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
            <Row className="p-0">
                <Col sm={12} md={12} lg={7} xl={7} className="cardSpacing ">
                    <div className="d-flex justify-content-start">
                        <h4 className="mb-4 me-2 pt-1 fw-bold" style={{ width: "min-content" }}>{props.title}</h4>
                        <img src={props.icon} style={{ height: "35px" }} />
                    </div>
                    <p className="fw-bolder">{props.text}</p>

                    <p>{props.desc}</p>
                    <div className=" d-flex justify-content-start flex-wrap gap-4 my-3">
                        <a>
                            <img className="shop-badge" src={googleplay} />
                        </a>
                        <a>
                            <img className="shop-badge" src={appstore} />
                        </a>

                    </div>
                    <div className="mb-5 pb-5 mt-4 button-con">
                        {/* <CustomButton  arr={true} text={props.buttonText} shadow="rgb(20, 93, 203)" className="ms-0 py-1 px-5 fs-7" /> */}
                    </div>


                </Col>
                <Col sm={12} md={12} lg={5} xl={5} className="d-none d-lg-flex pe-4 align-items-end">
                    <img src={props.img} alt='application preview' className="photo " />
                </Col>
            </Row>

        </div>
        </Tilt>
    )
}

