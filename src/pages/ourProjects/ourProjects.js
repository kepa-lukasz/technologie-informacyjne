import React, { useState, useEffect } from "react";
import Project from "./project-generator";
import "./projectStyles.css"

let projectData = [
    {
        "anchor" : "klimat",
        "buttonText" : "",
        "bgc": "rgb(19,87,193)",
        "tags": [
            "<img class='projectTagImg' src='https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/be6901f5-acd1-4226-8fd7-a1a21f11e639.png?auto=format%2Ccompress&fit=max&w=256&q=75&ch=Width%2CDPR'/>",
            "<img class='projectTagImg' src='https://user-images.githubusercontent.com/22857183/114290658-8f2f3500-9a57-11eb-99da-9dfefd25c363.png'/>",
            "<img class='projectTagImg' src='https://store-images.s-microsoft.com/image/apps.40706.c0d8a4ee-4a4b-48eb-889f-a1334048dbb2.c2325b19-aeda-4819-a4a3-c1bc938a89a4.5e3a144d-d373-4058-9a1e-96c4817cebbf'/>",
            "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-bootstrap' width='64' height='64' viewBox='0 0 24 24' stroke-width='1.5' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2' /><path d='M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2' /><path d='M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-react' width='64' height='64' viewBox='0 0 24 24' stroke-width='1.5' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102' /><path d='M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102' /><path d='M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2' /><path d='M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2' /><path d='M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896' /><path d='M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897' /><path d='M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z' /></svg>"
            ],
        "names" : [
            "Smartsupp", "EmailJS", "Cookiebot","React.js", "Bootstrap"
        ],
        "link": "/"
    }
]


const OurProjects = ({ lang }) => {

    const [used_lang, set_lang] = useState(require(`./projects-lang/${lang}.json`));

    useEffect(() => {
        let current_lang = require(`./projects-lang/${lang}.json`)
        set_lang(current_lang)
      
    })

    return (
        <div id="realizacje" className="d-flex justify-content-center mt-5 flex-wrap" style={{minHeight:"70vh", backgroundColor: 'rgba(39, 40, 44, 1)' }}>
            <div className="main" style={{ maxWidth: "1700px", width: "100vw" }}>
            <div className="cien cien1" />

            <div className="cien cien2" />
            <div className="cien cien3" />

            <div className="cien cien4" />
                <div className="mx-5 mt-5">
                    <h1 className="position-relative">{used_lang[0].header}</h1>
                </div>
                <div className="mt-5 px-2 px-md-2 d-flex justify-content-center">
                    {
                        projectData.map((el) => {
                            return (
                                <Project item={el} text={used_lang[0].buttonText} />
                            )
                        })
                    }
                </div>
            </div>



        </div>
    )
}
export default OurProjects;