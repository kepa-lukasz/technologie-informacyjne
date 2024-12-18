import React, { useEffect, useState } from 'react';
import { Container, Col, Row, DropdownButton, Dropdown } from "react-bootstrap";
import "../main.css"
import logoWhite from '../photos/logo-white.png';
import { Link } from 'react-router-dom';

import PolandFlag from "./footer-lang/poland-flag-icon.svg"
import GermanyFlag from "./footer-lang/germany-flag-icon.svg"
import UKFlag from "./footer-lang/united-kingdom-flag-icon.svg"




const Footer = ({ lang, lang_change }) => {

    const [used_lang, set_lang] = useState(require(`./footer-lang/en.json`));

    useEffect(() => {
        let current_lang = require(`./footer-lang/${lang}.json`)
        set_lang(current_lang)
    }, [])


    const changeLanguage = (lang) => {
        lang_change(lang);
    }
    // const { t, i18n } = useTranslation();

    return (
        <footer className='footerBody' data-aos-anchor-placement="top-bottom" id="footer" data-aos="fade-up" data-aos-delay="100">
            <Container fluid className='bg px-5 py-3  '>
                <Container>
                    <Row>
                        <Col className='col-12 col-lg-3 d-flex p-0 align-items-center'>
                            <a href='/'>
                            <img className='footer-logo' src={logoWhite} alt="TechSquare" />
                            </a>
                        </Col>
                        <Col className='col-12 col-sm-4 col-md-3 col-lg-2 mt-4'>
                            {/* <h5 className='main-text'>{t("footer.services.title")}</h5> */}
                            <h5 className='main-text'>{used_lang.services[0]}</h5>
                            <a href='/web'>
                                <span className='default-text'>{used_lang.services[1]}</span>
                            </a>
                            <br />
                            <a href='/uiux'>
                                <span className='default-text'>{used_lang.services[2]}</span>
                            </a>
                            <br />
                            <a href='/mobile'>
                                <span className='default-text'>{used_lang.services[3]}</span>
                            </a>
                            
                            <br /><a href='/itsupport'>
                                <span className='default-text'>{used_lang.services[4]}</span>

                            </a>
                            {/* <br /><span className='default-text'>{t("footer.services.itSupp")}</span> */}

                        </Col>
                        <Col className='col-12 col-sm-4 col-md-3 col-lg-2 mt-4'>
                            {/* <h5 className='main-text'>{t("footer.contact.title")}</h5> */}
                            <h5 className='main-text'>{used_lang.contact[0]}</h5>
                            {/* <span className='main-text'>{t("footer.contact.client")}</span> */}
                            <span className='main-text'>{used_lang.contact[1]}</span>
                            <br />
                            <a href='mailto:contact@techsquare.pl'>
                            <span className='default-text'>contact@techsquare.pl</span>
                            </a>
                            {/* <br /><span className='main-text'>{t("footer.contact.candidates")}</span> */}
                            <br /><span className='main-text'>{used_lang.contact[2]}</span>
                            <br />
                            <a href='mailto:kariera@techsquare.pl'>
                            <span className='default-text'>kariera@techsquare.pl</span>
                            </a>

                        </Col>
                        <Col className='col-12 col-sm-4 col-md-3 col-lg-2 mt-4'>
                            <h5 className='main-text'>{used_lang.another[0]}</h5>
                            <a href="/privacy-policy">
                                <span className='default-text'>{used_lang.another[1]}</span>
                            </a>
                            <br /><span className='default-text'>{used_lang.another[2]}</span>
                            <a href='/our-projects'>
                            <br /><span className='default-text'>{used_lang.another[3]}</span>
                            </a>
                        </Col>
                        <Col className='col-12 col-md-3 col-lg-3 mt-4 px-0'>
                            <h5 className='main-text find'>{used_lang.rest[0]}</h5>
                            {/* <svg className='mb-5' width="180" height="24" viewBox="0 0 216 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_104_491)">
                                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2073 22.581 20.2775 21.05 21.744 19.0076C23.2106 16.9653 23.9996 14.5144 24 12C24 5.37 18.63 0 12 0Z" fill="#A9A9AB" />
                                </g>
                                <g clip-path="url(#clip1_104_491)">
                                    <path d="M72 12.073C72 5.40405 66.627 -0.00195312 60 -0.00195312C53.37 -0.000453125 47.997 5.40405 47.997 12.0745C47.997 18.1 52.386 23.095 58.122 24.001V15.5635H55.077V12.0745H58.125V9.41205C58.125 6.38655 59.9175 4.71555 62.658 4.71555C63.972 4.71555 65.3445 4.95105 65.3445 4.95105V7.92105H63.831C62.3415 7.92105 61.8765 8.85255 61.8765 9.80805V12.073H65.2035L64.6725 15.562H61.875V23.9995C67.611 23.0935 72 18.0985 72 12.073Z" fill="#A9A9AB" />
                                </g>
                                <g clip-path="url(#clip2_104_491)">
                                    <path d="M96 1.719C96 0.7695 96.789 0 97.7625 0H118.237C119.211 0 120 0.7695 120 1.719V22.281C120 23.2305 119.211 24 118.237 24H97.7625C96.789 24 96 23.2305 96 22.281V1.719ZM103.414 20.091V9.2535H99.813V20.091H103.414ZM101.615 7.773C102.87 7.773 103.651 6.942 103.651 5.901C103.629 4.8375 102.872 4.029 101.639 4.029C100.405 4.029 99.6 4.839 99.6 5.901C99.6 6.942 100.382 7.773 101.59 7.773H101.615ZM108.976 20.091V14.0385C108.976 13.7145 109 13.3905 109.097 13.1595C109.356 12.513 109.949 11.8425 110.944 11.8425C112.248 11.8425 112.768 12.8355 112.768 14.2935V20.091H116.37V13.875C116.37 10.545 114.594 8.997 112.224 8.997C110.313 8.997 109.457 10.047 108.976 10.7865V10.824H108.953C108.96 10.8115 108.968 10.799 108.976 10.7865V9.2535H105.377C105.422 10.2705 105.377 20.091 105.377 20.091H108.976Z" fill="#A9A9AB" />
                                </g>
                                <g clip-path="url(#clip3_104_491)">
                                    <path d="M164.402 3.48907C163.301 2.37859 161.991 1.49819 160.547 0.899181C159.103 0.300173 157.554 -0.00546641 155.991 7.39958e-05C149.44 7.39958e-05 144.102 5.33707 144.096 11.8891C144.096 13.9876 144.645 16.0291 145.682 17.8366L144 24.0001L150.306 22.3471C152.051 23.2964 154.005 23.7941 155.991 23.7946H155.997C162.549 23.7946 167.886 18.4576 167.892 11.8996C167.893 10.3366 167.586 8.78885 166.986 7.34539C166.387 5.90193 165.51 4.59132 164.402 3.48907ZM155.991 21.7816C154.219 21.7822 152.481 21.3055 150.957 20.4016L150.597 20.1856L146.856 21.1666L147.855 17.5171L147.621 17.1406C146.631 15.5661 146.107 13.7431 146.11 11.8831C146.11 6.44407 150.546 2.00707 155.997 2.00707C157.296 2.00474 158.582 2.25949 159.782 2.75661C160.981 3.25374 162.071 3.98341 162.987 4.90357C163.907 5.82015 164.636 6.90971 165.132 8.10942C165.628 9.30913 165.882 10.5952 165.879 11.8936C165.873 17.3521 161.438 21.7816 155.991 21.7816ZM161.413 14.3806C161.118 14.2321 159.658 13.5136 159.384 13.4116C159.111 13.3141 158.911 13.2631 158.716 13.5601C158.517 13.8556 157.947 14.5291 157.776 14.7226C157.605 14.9221 157.428 14.9446 157.131 14.7976C156.835 14.6476 155.877 14.3356 154.743 13.3201C153.858 12.5326 153.266 11.5576 153.089 11.2621C152.918 10.9651 153.072 10.8061 153.22 10.6576C153.351 10.5256 153.516 10.3096 153.664 10.1386C153.814 9.96757 153.864 9.84157 153.962 9.64357C154.059 9.44257 154.012 9.27157 153.939 9.12307C153.864 8.97457 153.271 7.50907 153.021 6.91807C152.781 6.33457 152.536 6.41557 152.353 6.40807C152.182 6.39757 151.983 6.39757 151.784 6.39757C151.633 6.40132 151.485 6.43616 151.348 6.49992C151.211 6.56368 151.09 6.65497 150.99 6.76807C150.717 7.06507 149.954 7.78357 149.954 9.24907C149.954 10.7146 151.018 12.1231 151.168 12.3226C151.315 12.5221 153.259 15.5206 156.243 16.8106C156.948 17.1181 157.503 17.2996 157.937 17.4376C158.649 17.6656 159.292 17.6311 159.806 17.5576C160.375 17.4706 161.562 16.8376 161.812 16.1431C162.059 15.4471 162.059 14.8531 161.984 14.7286C161.91 14.6026 161.711 14.5291 161.413 14.3806Z" fill="#A9A9AB" />
                                </g>
                                <g clip-path="url(#clip4_104_491)">
                                    <path d="M215.547 10.9303L205.068 0.45279C204.925 0.309243 204.754 0.195371 204.567 0.117679C204.379 0.0399879 204.178 0 203.975 0C203.772 0 203.571 0.0399879 203.384 0.117679C203.196 0.195371 203.026 0.309243 202.882 0.45279L200.707 2.62779L203.467 5.38779C203.793 5.27665 204.143 5.25927 204.478 5.33761C204.813 5.41596 205.119 5.58689 205.362 5.83088C205.604 6.07487 205.773 6.38211 205.849 6.71752C205.925 7.05293 205.906 7.40301 205.792 7.72779L208.452 10.3888C208.845 10.2503 209.274 10.2498 209.668 10.3876C210.062 10.5254 210.397 10.7931 210.618 11.1467C210.839 11.5004 210.934 11.9188 210.885 12.3331C210.837 12.7475 210.649 13.133 210.352 13.4263C210.052 13.7285 209.656 13.917 209.232 13.9597C208.808 14.0023 208.383 13.8965 208.028 13.6603C207.674 13.424 207.412 13.0721 207.289 12.6644C207.165 12.2568 207.186 11.8188 207.349 11.4253L204.87 8.94429V15.4738C205.247 15.6603 205.548 15.9704 205.724 16.3524C205.9 16.7343 205.94 17.165 205.837 17.5727C205.734 17.9804 205.494 18.3405 205.158 18.5929C204.822 18.8453 204.409 18.9748 203.989 18.9598C203.568 18.9447 203.166 18.7861 202.848 18.5104C202.531 18.2347 202.317 17.8584 202.244 17.4444C202.17 17.0304 202.24 16.6036 202.443 16.2352C202.646 15.8668 202.969 15.579 203.358 15.4198V8.83029C203.133 8.73827 202.929 8.60272 202.757 8.43143C202.585 8.26015 202.449 8.05653 202.356 7.83231C202.263 7.6081 202.216 7.36771 202.216 7.12503C202.217 6.88234 202.265 6.64214 202.359 6.41829L199.639 3.69729L192.454 10.8823C192.311 11.0258 192.197 11.1961 192.119 11.3836C192.042 11.5711 192.002 11.7721 192.002 11.975C192.002 12.178 192.042 12.379 192.119 12.5665C192.197 12.754 192.311 12.9243 192.454 13.0678L202.933 23.5468C203.077 23.6903 203.247 23.8042 203.435 23.8819C203.622 23.9596 203.823 23.9996 204.026 23.9996C204.229 23.9996 204.43 23.9596 204.618 23.8819C204.805 23.8042 204.976 23.6903 205.119 23.5468L215.549 13.1173C215.838 12.8273 216.001 12.4343 216.001 12.0245C216.001 11.6148 215.838 11.2218 215.549 10.9318" fill="#A9A9AB" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_104_491">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_104_491">
                                        <rect width="24" height="24" fill="white" transform="translate(48)" />
                                    </clipPath>
                                    <clipPath id="clip2_104_491">
                                        <rect width="24" height="24" fill="white" transform="translate(96)" />
                                    </clipPath>
                                    <clipPath id="clip3_104_491">
                                        <rect width="24" height="24" fill="white" transform="translate(144)" />
                                    </clipPath>
                                    <clipPath id="clip4_104_491">
                                        <rect width="24" height="24" fill="white" transform="translate(192)" />
                                    </clipPath>
                                </defs>
                            </svg> */}
                            <Row className='px-2'>
                                <Col className='p-0 pb-3 icon-holder'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2073 22.581 20.2775 21.05 21.744 19.0076C23.2106 16.9653 23.9996 14.5144 24 12C24 5.37 18.63 0 12 0Z" fill="#A9A9AB" />
                                    </svg>
                                </Col>
                                <Col className='p-0 pb-3 icon-holder'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_104_792)">
                                            <path d="M24 12.073C24 5.40405 18.627 -0.00195312 12 -0.00195312C5.37 -0.000453125 -0.00299835 5.40405 -0.00299835 12.0745C-0.00299835 18.1 4.386 23.095 10.122 24.001V15.5635H7.077V12.0745H10.125V9.41205C10.125 6.38655 11.9175 4.71555 14.658 4.71555C15.972 4.71555 17.3445 4.95105 17.3445 4.95105V7.92105H15.831C14.3415 7.92105 13.8765 8.85255 13.8765 9.80805V12.073H17.2035L16.6725 15.562H13.875V23.9995C19.611 23.0935 24 18.0985 24 12.073Z" fill="#A9A9AB" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_104_792">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Col>
                                <Col className='p-0 pb-3 icon-holder'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_104_794)">
                                            <path d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z" fill="#A9A9AB" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_104_794">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </Col>
                            </Row>
                            <br />
                            <span className='d-flex align-items-center'>

                                {/* <svg className='me-2' width="20" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 3.75C0 2.75544 0.395088 1.80161 1.09835 1.09835C1.80161 0.395088 2.75544 0 3.75 0L16.875 0C17.8696 0 18.8234 0.395088 19.5266 1.09835C20.2299 1.80161 20.625 2.75544 20.625 3.75V9.375H26.25C27.2446 9.375 28.1984 9.77009 28.9016 10.4733C29.6049 11.1766 30 12.1304 30 13.125V26.25C30 27.2446 29.6049 28.1984 28.9016 28.9016C28.1984 29.6049 27.2446 30 26.25 30H13.125C12.1304 30 11.1766 29.6049 10.4733 28.9016C9.77009 28.1984 9.375 27.2446 9.375 26.25V20.625H3.75C2.75544 20.625 1.80161 20.2299 1.09835 19.5266C0.395088 18.8234 0 17.8696 0 16.875V3.75ZM3.75 1.875C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V16.875C1.875 17.3723 2.07254 17.8492 2.42417 18.2008C2.77581 18.5525 3.25272 18.75 3.75 18.75H16.875C17.3723 18.75 17.8492 18.5525 18.2008 18.2008C18.5525 17.8492 18.75 17.3723 18.75 16.875V3.75C18.75 3.25272 18.5525 2.77581 18.2008 2.42417C17.8492 2.07254 17.3723 1.875 16.875 1.875H3.75ZM17.1337 20.6156C17.4956 21.18 17.8875 21.7087 18.315 22.2019C16.9125 23.28 15.1781 24.0788 13.125 24.6244C13.4587 25.0312 13.9706 25.815 14.1656 26.25C16.275 25.5769 18.0656 24.6675 19.5769 23.4487C21.0338 24.6956 22.8375 25.6331 25.0706 26.2087C25.32 25.7325 25.8469 24.9469 26.25 24.54C24.1406 24.0656 22.3931 23.2388 20.9625 22.1325C22.2394 20.7319 23.2537 19.0369 24.0019 16.9631H26.25V15H20.625V16.9631H22.0594C21.4631 18.5456 20.6719 19.8619 19.6744 20.9569C19.3989 20.6634 19.1391 20.3554 18.8962 20.0344C18.3671 20.3736 17.7609 20.5736 17.1337 20.6156Z" fill="white" />
                                </svg> */}
                                    {/* <img className="flagButton" src={PolandFlag} onClick={() => { changeLanguage('pl') }}/>
                                    <img className="flagButton" src={GermanyFlag} onClick={() => { changeLanguage('de') }}/>
                                    <img className="flagButton" src={UKFlag} onClick={() => { changeLanguage('en') }}/> */}

                                

                            </span>
                        </Col>
                    </Row>
                    <div className='hr'></div>
                    <Row>

                        <Col className='lower-text  d-flex p-2 ' style={{ color: "#DDD" }}>
                            Copyright © 2000-2023 TechSquare.pl
                        </Col>
                        <Col className='lower-text justify-content-end d-flex p-2' style={{ color: "#DDD" }}>
                            {used_lang.rest[1]}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </footer>
    )
}
export default Footer;