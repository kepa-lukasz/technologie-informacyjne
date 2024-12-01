import "./styles/services-styles.css"
import { Container } from "react-bootstrap";
import { Tilt } from "react-tilt";

import web from "../images/web-background-image.jpg"
import uxui from "../images/uxui-background-image.jpg"
import mobile from "../images/mobile-background-image.jpg"

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            8,     // max tilt rotation (degrees)
	perspective:    3000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          5000,   // Speed of the enter/exit transition
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    reset: false
}

const SubPageImg = ({properties}) => {
    const imgs = {"web" : web, "uxui" : uxui, "mobile": mobile}
    return (
        <Container className="p-0 mt-5 mb-4 img-holder" fluid
            style={{zIndex: 10, position: "relative"}}
            data-aos="fade-up"
        >
            <Tilt options={defaultOptions}>
            <img src={imgs[properties]} alt="bgc" className="img" />
            </Tilt>
        </Container>
    )
}
export default SubPageImg;