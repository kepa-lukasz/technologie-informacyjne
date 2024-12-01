import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Card } from 'react-bootstrap';
import MiniAccordion from './mini-accordion';

function CustomToggle({ eventKey, content }) {
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

function NavAccordion({lang}) {
    return (
        <Accordion className='m-0 p-0' >
            <CustomToggle content={lang.buttons[0]} eventKey="0">{lang.dropdown[3]}</CustomToggle>

            <Accordion.Collapse eventKey="0">
                <div className='ms-5'>
                    <MiniAccordion display_name={lang.dropdown[0]} lang={lang.subpages} name="Klient prywatny"/>
                    <MiniAccordion display_name={lang.dropdown[2]} lang={lang.subpages} name="Duże firmy i instytucje"/>
                    <MiniAccordion display_name={lang.dropdown[1]} lang={lang.subpages} name= "Małe i średnie firmy"/>
                </div>
            </Accordion.Collapse>
        </Accordion>
    );
}

export default NavAccordion;