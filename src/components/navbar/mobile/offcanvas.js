import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Offcanvas, Accordion, CustomToggle} from 'react-bootstrap';
import logo from "../../photos/logo.png"
import DropdownMenu from "../desktop/nav-dropdown";
import NavAccordion from './accordion';
import "../navbar.css"
import ProjectAccordion from './accordion-projects';


function MobileNavbar({ lang }) {
    // const drop = useRef()
    const [show, setShow] = useState(false);
    // const [isDropdownVisible, setDropdownVisible] = useState(false);

    // const handleDropdown = (ev) => {
    //     console.log(ev)
    // }

    const handleClose = () => setShow(false);
    const handleShow = () => {

        setShow(true)
        //     setDropdownVisible(false);
    };
    // const handleMouseEnter = () => {
    //     drop.current.classList.add("parentM-hover")
    //     setDropdownVisible(true);
    // };

    // const closeDropdown = () => {
    //     drop.current.classList.remove("parentM-hover")
    //     setDropdownVisible(false);
    // };
    // const handleChange = () => {
    //     isDropdownVisible ? closeDropdown() : handleClose();
    // }

    return (
        <>
            <Button className='bg-button p-2 me-3' onClick={handleShow}>
                MENU
            </Button>

            <Offcanvas show={show} className="pt-2 text-white primary" >
                <Offcanvas.Header closeButton onClick={handleClose}>
                    <Offcanvas.Title>
                        <a href="/">
                            <img className='offcanvas-logo'
                                src={logo} alt="techsquare-logo"
                                onClick={handleClose}
                            // onMouseEnter={closeDropdown}
                            />
                        </a>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='offcanvas-body mb-0 pb-0' style={{ overflow: "auto" }}>
                    {/* <div className="dropdownM"
                        ref={drop}
                        style={{ position: 'relative' }}
                        onMouseEnter={handleMouseEnter}

                    >
                        <p className="m-0">
                            Usługi
                        </p>
                        {isDropdownVisible && <DropdownMenu onMouseEnter={handleDropdown} close={handleClose} />}
                    </div> */}



                    <NavAccordion lang={lang} />

                    <a href='our-projects' className='ap'>
                        <p>{lang.buttons[1]}</p>
                    </a>
                    <ProjectAccordion title={lang.buttons[2]}/>
                    <a className='ap m-0 p-0' href="/contact">
                        <p className="fw-bold">{lang.buttons[3]}</p>
                    </a>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MobileNavbar;