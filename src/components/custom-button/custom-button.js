import { Button } from "react-bootstrap"
import "./custom-button.css"

import { useRef } from "react";

const CustomButton = ({ shadow, style, arr, text, className, ...rest }) => {
    

    let shadowColor = shadow
    if (shadow == undefined) {
        shadowColor = "rgba(122, 57, 197, 1)"
    }

    let customStyle = {}
    customStyle["--button-shadow"] = shadowColor

    // const sound = useRef(null);

    // const playSound = () => {
    //     // sound.current.play();

    //     sounnd.play();
    // };

    // const stopSound = () => {
    //     // sound.current.stop();
    //     sounnd.play();
    // };

    // var sounnd = new Howl({
    //     src: lightsaber,
    //     volume: 0.1,
    //     rate: 1.3,
    //     preload: true,

    // })

    const soundOptions = {
        src: "../../components/sounds/swing.mp3",
        volume: 1.0,
    };

    return (
        <Button
        {...rest}
            style={customStyle}
            //   onMouseEnter={playSound} onMouseLeave={stopSound}
            className={"bg-button d-flex justify-content-center text-center " + className}
        >

            {/* <Howl
                ref={sound}
                {...soundOptions}
            /> */}

            <p className="text-center button-top-text p-0 m-0 ps-1 ">
                {text}&nbsp;
            </p>

            {(arr) ?
                <svg style={{ minWidth: "10px" }} width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.32731 11L6.45231 10.1364L10.0546 6.53409H0.725037V5.28409H10.0546L6.45231 1.69318L7.32731 0.818182L12.4182 5.90909L7.32731 11Z" fill="white" />
                </svg> : null}
        </Button>
    )
}

export default CustomButton;