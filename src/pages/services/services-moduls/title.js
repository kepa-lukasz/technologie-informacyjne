import React from "react";
import { Col } from "react-bootstrap";

const Title = (props) => {
    let star = (props.properties.star) ? <span style={{ color: "#EF3DFF", fontWeight: "bold" }}>*</span> : null
    return (
        <div style={{ zIndex: 0, position: "relative" }}>

            <Col className="col-12 col-lg-8 zindex-10">
                {(star) ? <h2 className="ubuntu-hard m-0 fs-2">
                    {props.properties.text}{star}
                </h2> :
                    <h1 className="ubuntu-hard m-0">
                        {props.properties.text}
                    </h1>}

            </Col>

        </div>
    )
}
export default Title;