import React, { useState } from "react";
import { Col, Row } from "react-bootstrap"
import "./why_us_cards.css"

export default function ContactCardModule({ color, title, icon, svg, desc }) {
    return (
        <div className="m-0 p-2 col-12 col-md-6 col-xl-4" data-aos="fade-up">
            <Col style={{"--card-shadow-color" : svg}} className={" aboutCard  w-100 h-100"}  >
                <Row style={{ zIndex: '4', position: 'relative' }}>
                    <div className="svg-shadow">
                        <svg className="cardWave" width="429" height="170" viewBox="0 0 429 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_817_345)">
                                <path d="M573.801 251.82L280.765 135.836C221.435 106.848 100.029 50.7659 89.0434 58.3451C75.3114 67.8191 108.128 122.846 127.072 134.729C146.016 146.612 310.116 224.601 320.502 221.959C328.81 219.845 482.156 274.862 557.79 302.635L573.801 251.82Z" fill={svg} />
                            </g>
                            <defs>
                                <filter id="filter0_f_817_345" x="0.776489" y="-27.3522" width="658.024" height="414.987" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="42.5" result="effect1_foregroundBlur_817_345" />
                                </filter>
                            </defs>
                        </svg>

                    </div>
                    <Col md={"auto"}>
                        {icon}
                    </Col>

                    <Col sm={12} lg={7} xl={8} xxl={9} >
                        <p className="fw-bold" style={{ fontSize: '0.9rem', color: `#${color}` }}>{title}</p>
                        <p style={{ fontSize: '0.8rem', position: "relative", zIndex: "100" }} className="m-0">{desc}</p>
                    </Col>

                </Row>
            </Col>
        </div>
    )

}