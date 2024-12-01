import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


function Elements({ name, lang }) {
    let services = {    
        "Małe i średnie firmy": [
            { name: `${lang[2]}`, link: "/itsupport" },
            { name: `${lang[3]}`, link: "/web" },
            { name: `${lang[0]}`, link: "/mobile" },
            { name: `${lang[1]}`, link: "/uiux" },
        ],
        "Duże firmy i instytucje": [
            { name: `${lang[2]}`, link: "/itsupport" },
            { name: `${lang[0]}`, link: "/mobile" },
            { name: `${lang[1]}`, link: "/uiux" },
        ],
        "Klient prywatny": [
            { name: `${lang[2]}`, link: "/itsupport" },
            { name: `${lang[3]}`, link: "/web" },
            { name: `${lang[0]}`, link: "/mobile" },
            { name: `${lang[1]}`, link: "/uiux" },
            
        ]
    }

    const list = services[name].map((el) => {
        return (
            <a href={el.link}>
                <p className='accordionP my-3'>{el.name}</p>
            </a>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}

function CustomToggle({ eventKey, name }) {
    const decoratedOnClick = useAccordionButton(eventKey, (event)=>{
        event.target.classList.toggle("accordion-Active")
    })
    return (
        <p className='accordionP m-0' onClick={decoratedOnClick}>{name}</p>
    );
}

function MiniAccordion({name, display_name,  lang, ...rest}) {
    
    return (
        <Accordion className='m-0 p-0 mt-4' >
            <CustomToggle name={display_name} eventKey="0">Click me!</CustomToggle>

            <Accordion.Collapse eventKey="0">
                <div className='ms-5'>
                    <Elements name={name} lang={lang}/>
                </div>
            </Accordion.Collapse>
        </Accordion>
    );
}

export default MiniAccordion;