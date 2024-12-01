import '../navbar.css'
import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import CustomButton from '../../custom-button/custom-button'
import single from '../icons/single.svg'
import smallCompany from '../icons/middle.svg'
import bigComapny from '../icons/big.svg'

import webIcon from '../icons/web.svg'
import mobileIcon from '../icons/mobile.svg'
import uxuiIcon from '../icons/uxui.svg'
import itSupportIcon from '../icons/support.svg'

export default function DropdownMenu({ dark, lang }) {
const links = [
    {
        focus_idx: 1,
        name: <label>{lang.subpages[3]}</label>,
        link: "web",
        icon: webIcon
    },
    {
        focus_idx: 2,
        name: <label>{lang.subpages[0]}</label>,
        link: "mobile",
        icon: mobileIcon
    },
    {
        focus_idx: 3,
        link: "uiux",
        name: <label>{lang.subpages[1]}</label>,
        icon: uxuiIcon
    },
    {
        focus_idx: 4,
        link: "itsupport",
        name: <label>{lang.subpages[2]}</label>,
        icon: itSupportIcon
    }
]




    const [darkTheme, setDarkTheme] = useState(dark)

    const [link_to_show, set_links] = useState()

    useEffect(() => {
        document.body.style.setProperty('--bg', (darkTheme) ? "#141414" : "#EEE");
        document.body.style.setProperty('--main-text', (darkTheme) ? "white" : "black");
        document.body.style.setProperty('--secondary-text', (darkTheme) ? "#AAA" : "#555");
        document.body.style.setProperty('--bottom-bg', (darkTheme) ? "#555" : "#DDD");

    }, [darkTheme])


    const handleMouseEnter = (idx, tab_idx) => {
        try {
            document.querySelector(`.parent-hover`).classList.add("grey")
            document.querySelector(`.parent-hover`).classList.remove("parent-hover")

        } catch { }
        document.querySelector(`.dropdown${idx}`).classList.add("parent-hover")
        document.querySelector(`.dropdown${idx}`).classList.remove("grey")

        // // setDropdownVisible(idx);
        let tab = [0, 1, 2, 3]
        switch (idx) {
            case 1:
                tab = [1, 2, 3, 0]
                break
            case 2:
                tab = [1, 2, 3]
                break
            default:
                tab = [1, 2, 3, 0]
                break
        }
        let links_lis = tab.map(el => {
            return (
                <a href={links[el].link} tabIndex={(links[el].focus_idx + tab_idx)}>
                    <div className="dropdown1 grey icon-handler d-flex align-items-center"
                        style={{ position: 'relative' }}
                    >
                        <div className='link_div d-flex link py-2 my-2 mb-1'>
                            {links[el].name}
                        </div>
                        <div className='nav-dropdown-icon'>
                            <img src={links[el].icon}/>
                        </div>
                    </div>
                </a>

            )
        })
        set_links(links_lis)
    };
    useEffect(() => {
        handleMouseEnter(3) //opcje dla klienta indywidualnego wyświetlają się na start 
    }, [])

    return (
        <div className='optionsBody d-flex flex-wrap  align-items-end p-0'>
            <Col className="col-6 d-flex menu_container  flex-wrap pt-4 ps-2">
                <ul className='m-0 '>
                    <span className='pt-3 ps-4 tag '>{lang.dropdown[3]}</span>
                    <div tabIndex={3} className="dropdown3  grey icon-handler pt-2 d-flex align-items-center"
                        style={{ position: 'relative' }}
                        onMouseEnter={() => { handleMouseEnter(3, 3) }}
                        onFocus={() => { handleMouseEnter(3, 3) }}
                    >
                        <div className=' d-flex link ps-4 py-2 my-2 mb-1'>
                        {lang.dropdown[0]}
                        </div>
                        <div className='nav-dropdown-icon'>
                            <img src={single} />
                        </div>

                    </div>
                    <div tabIndex={9} className="dropdown1 grey icon-handler d-flex align-items-center"
                        style={{ position: 'relative' }}
                        onMouseEnter={() => { handleMouseEnter(1, 9) }}
                        onFocus={() => { handleMouseEnter(1, 9) }}
                    >
                        <div className=' d-flex link ps-4 py-2 my-2 mb-1'>
                            {lang.dropdown[1]}
                        </div>
                        <div className='nav-dropdown-icon'>
                            <img src={smallCompany} />
                        </div>
                    </div>

                    <div tabIndex={15} className="dropdown2 grey icon-handler d-flex align-items-center"
                        style={{ position: 'relative' }}
                        onMouseEnter={() => { handleMouseEnter(2, 15) }}
                        onFocus={() => { handleMouseEnter(2, 15) }}
                    >
                        <div className=' d-flex link ps-4 py-2 my-2 mb-1'>
                        {lang.dropdown[2]}
                        </div>
                        <div className='nav-dropdown-icon'>
                            <img src={bigComapny} />
                        </div>

                    </div>
                </ul>
            </Col>
            <Col className="d-flex justify-content-center">
                <div className='v-line' >

                </div>
            </Col>
            <Col className='col-5 flex-wrap  menu_container pt-4 '>

                <span className='tag mb-5'>{lang.dropdown[4]}</span>
                <div className='pt-2'>
                    {link_to_show}
                </div>
            </Col>
            <Col className='ps-3 m-0 bottom-section py-2 d-flex' style={{ backgroundColor: "#DDD" }}>
                <Col sm={8} className='text-center '>
                    <p className='lower-title'>{lang.bottom[0]}</p>
                    <p className=" lower-text">
                    {lang.bottom[1]}
                    </p>
                </Col>
                <Col sm={4} className='d-flex align-items-center justify-content-end pe-3'>
                <a href='/contact'>
                    <CustomButton tabIndex={19} onClick={() => {  }} shadow={(darkTheme) ? "#888" : "#DDD"} arr={true} text={lang.bottom[2]} className="m-0 px-2 py-1 my-auto" />
                </a>
                </Col>
            </Col>
        </div>
    )
}