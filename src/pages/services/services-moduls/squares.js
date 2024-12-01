import React from "react";
import { Container } from "react-bootstrap";
const Squares = () => {
    return (
        <Container>
            {/* top-middle */}
            <div className="square square1">
            </div>

            {/* left-wall */}
            <div className="square square2">
            </div>

            {/* bottom-left */}
            <div className="square square3 d-none d-lg-block">
            </div>

            {/* bottom-right */}
            <div className="square square4">
            </div>

            {/* top-right */}
            <div className="square square5 d-none d-lg-block">
            </div>

            {/* left-top-empty */}
            <div className="square square6 empty">
            </div>

            {/* center-empty */}
            <div className="square square7 empty">
            </div>
            {/* right-wall-center */}
            <div className="square square8 empty"></div>

            {/* additional-left */}
            <div className="square square9">
            </div>
            {/* additional-left */}
            <div className="square square10"></div>
            {/* additional-right */}
            <div className="square square11 ">
            </div>
            {/* additional-right */}
            <div className="square square12 "></div>
            
            {/* additional-right-empty */}
            <div className="square square13 empty "></div>
        </Container >
    )
}
export default Squares;