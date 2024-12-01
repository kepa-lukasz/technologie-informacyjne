import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from "../photos/logo.png"
import DropdownMenu from "./desktop/nav-dropdown";
import MobileNavbar from "./mobile/offcanvas";
import DropdownProjects from "./desktop/project-dropdown";
import $ from "jquery"
import CustomButton from "../custom-button/custom-button";
function Navbar(props) {
    useEffect(() => {
        //powiększenie / zmniejszenie tekstu
        $(document).ready(function () {
            $('#resize-button-more').click(function () {

                $('body').css('font-size', '24px');
            });
            $('#resize-button-less').click(function () {

                $('body').css('font-size', '16px');
            });
        });
        //jasny - ciemny motyw
        $(document).ready(function () {

            $('#light-theme').click(function () {
                $('p, h1, h2, h3, h4, h5, h6, a, span, label').addClass('tekst-yellow');
            });
            $('#dark-theme').click(function () {
                $('p, h1, h2, h3, h4, h5, h6, a, span, label').removeClass('tekst-yellow');
            });
        });

    }, [])
    const [used_lang, set_lang] = useState(require(`./nav-lang/en.json`));

    useEffect(() => {
        let current_lang = require(`./nav-lang/${props.lang}.json`)
        set_lang(current_lang)
    })


    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isProjectDropdownVisible, setProjectDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        document.querySelector(".big_dropdown").classList.add("parent-hover_big")
        setDropdownVisible(true);

        document.querySelector(".project_dropdown").classList.remove("parent-hover_big")
        setProjectDropdownVisible(false);
    };
    const handleMouseEnter_projects = () => {
        document.querySelector(".project_dropdown").classList.add("parent-hover_big")
        setProjectDropdownVisible(true);


        document.querySelector(".big_dropdown").classList.remove("parent-hover_big")
        setDropdownVisible(false);
    };

    const hideServices = () => {
        document.querySelector(".big_dropdown").classList.remove("parent-hover_big")
        setDropdownVisible(false);
        document.querySelector(".project_dropdown").classList.remove("parent-hover_big")
        setProjectDropdownVisible(false);
    };

    return (
        <nav id="navbar" className={`navbar-body d-flex ${props.scrollPos > 3 ? 'nav-bgc' : 'nav-trs'}`} onMouseLeave={hideServices}>
            <a href="/" tabIndex={1} onFocus={hideServices}>
                <img className={`nav-logo ${props.scrollPos > 3 ? 'nav-logo-sm' : 'nav-logo'}`} src={logo} alt='techsquare' />
            </a>


            <div className="nav-menu d-none d-lg-flex align-items-center "
            >
                <CustomButton id="resize-button-more" arr={false} text={"powiększ tekst"} className="my-auto px-3 py-0 bg-50px" />
                <CustomButton id="resize-button-less" arr={false} text={"zmniejsz tekst"} className=" ms-3 my-auto px-3 py-0 bg-50px" />
                <CustomButton id="light-theme" arr={false} text={"Zwiększ konktrast"} className=" ms-3 my-auto px-3 py-0 bg-50px" />

                <CustomButton id="dark-theme" arr={false} text={"Zmniejsz konktrast"} className=" ms-3 my-auto px-3 py-0 bg-50px" />

                <div tabIndex={2} className="big_dropdown dropdown"
                    style={{ position: 'relative' }}
                    onFocus={handleMouseEnter}
                    onMouseEnter={handleMouseEnter}


                >
                    <p className="m-0">
                        {used_lang.buttons[0]}
                    </p>
                    {isDropdownVisible && <DropdownMenu lang={used_lang} dark={true} />}
                </div>

                <a href="/our-projects" tabIndex={24} className="ap my-0" onFocus={hideServices} onMouseEnter={hideServices}>
                    <p className="my-0 py-0">{used_lang.buttons[1]}</p>
                </a>
                <div tabIndex={25} className="project_dropdown dropdown"
                    style={{ position: 'relative' }}
                    onFocus={handleMouseEnter_projects}
                    onMouseEnter={handleMouseEnter_projects}


                >
                    <p className="m-0">
                        {used_lang.buttons[2]}
                    </p>
                    {isProjectDropdownVisible && <DropdownProjects lang={used_lang} dark={true} />}
                </div>
                <a tabIndex={30} href="contact" className="ap my-0 " onFocus={hideServices} onMouseEnter={hideServices}>
                    <p className="my-0 py-0">{used_lang.buttons[3]}</p>
                </a>
            </div>

            <div className="nav-menu d-flex align-items-center d-lg-none">
                <MobileNavbar lang={used_lang} />
            </div>

        </nav>
    )
}
export default Navbar