import '../navbar.css'
import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
export default function DropdownProjects({dark}) {

    const [darkTheme] = useState(dark)

    useEffect(() => {
        document.body.style.setProperty('--bg', (darkTheme) ? "#141414" : "#EEE");
        document.body.style.setProperty('--main-text', (darkTheme) ? "white" : "black");
        document.body.style.setProperty('--secondary-text', (darkTheme) ? "#AAA" : "#555");
        document.body.style.setProperty('--bottom-bg', (darkTheme) ? "#555" : "#DDD");

    }, [darkTheme])
    return (
        <div className='optionsBody projects d-flex flex-wrap align-items-end p-0'>
            <Col className="d-flex menu_container flex-wrap  ps-0">
                <ul className='m-0 w-100 pt-3'>
                    <span className='pt-3 ps-4 tag  w-100' style={{ width: "100% !important" }}>
                        Zobacz, co już zrobiliśmy
                    </span>
                    <a
                        className='projectsgrey'
                        tabIndex={26}
                        href='/mateup'
                    >
                        <div className="dropdown1 icon-handler d-flex align-items-center"
                            style={{ position: 'relative' }}
                        >
                            <div className=' d-flex link ps-4 py-2 my-2  mb-1'>
                                MateUp.global
                            </div>
                        </div>
                    </a>

                   




                </ul>
            </Col>



        </div>
    )
}