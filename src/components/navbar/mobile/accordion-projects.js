import React from "react";
import {Accordion} from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


function ProjectToggle({ eventKey, content }) {
    const decoratedOnClick = useAccordionButton(eventKey, (event) =>
        event.target.classList.toggle("accordion-Active")
    );
    return (
        // <button
        //   type="button"
        //   style={{ backgroundColor: 'pink' }}
        //   onClick={decoratedOnClick}
        // >
        //   {children}
        // </button>
        <p className='accordionP m-0' onClick={decoratedOnClick}>{content}</p>
    );
}
const ProjectAccordion = ({title}) =>{
    return(
        <Accordion className='m-0 p-0' >
                        <ProjectToggle content={title} eventKey="1">
                            {title}
                        </ProjectToggle>

                        <Accordion.Collapse eventKey="1">
                            <div className='ms-5'>
                                <a className='ap' href="/mateup">
                                    <p>MateUp.global</p>
                                </a>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
    )
}
export default ProjectAccordion
