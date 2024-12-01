import { Col, Row } from "react-bootstrap";
import "./projectStyles.css"
import CustomButton from "../../components/custom-button/custom-button"
import img from "../../images/Device - Macbook Pro.png";
import logo from "../../images/Simplification.png"
const Project = ({ anchor, item, text }) => {
    //prop states
    // title -> nazwa projektu <- string 
    // desc -> opis projektu <- string 
    // link -> link do projektu (później będzie) <- jakiś string kurde ten
    // tag -> !! array obiektów !! tag'ów 

    // img -> zdjęcię grafiki <- import

    // bgc -> kolor tła #FFFFFF lub linear-gradient(125deg, #FFFFFF 0%, #FFFFFF 100%) <- w stringu


    return (
        <div className="productBody  mb-5"
            style={{ background: item.bgc, maxWidth: "1200px" }}
            data-aos="zoom-out" data-aos-anchor-placement="center-bottom">
            <Row className="p-0 ">
                <Col sm={12} md={5} lg={5} className="cardSpacing pt-5 px-0 ps-md-4 ps-lg-5">
                    <div className="w-100 d-flex d-md-block justify-content-center mb-5">
                    <img src={logo} className="logo"/>
                    </div>
                    
                    <div className="d-flex my-3 flex-wrap justify-content-start gap-2 gap-lg-4" 
                    style={{maxWidth: "350px"}}>
                        {
                            item.tags.map((el, idx) => {
                                return (
                                    <div 
                                    className="tagBody icon rounded d-flex mb-4 d-none d-md-block"
                                    
                                    >

                                        <div dangerouslySetInnerHTML={{ __html: el }}>
                                        </div>
                                        <div className=" d-flex align-items-start">
                                            <p className="m-0 px-2">{item.names[idx]}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    

                </Col>
                <Col sm={12} md={7} lg={7} className="position-relative macbook-container">
                    <div className="h-75 d-flex justify-content-end align-items-end pb-4 px-2 ps-md-0 pe-2 h-100">
                        <img 
                        data-aos-duration="1000"
                         data-aos="flip-up"
                          data-aos-anchor-placement="top-bottom" 
                          data-aos-anchor="#realizacje"
                          src={img} alt='' 
                          className="macbook mt-5" />
                    </div>
                    <div className="button d-flex align-items-center justify-content-center position-absolute">
                        <a href="https://www.klimat-24.pl/" target="_blank" className="w-75">

                            <CustomButton arr={true} text={text} shadow="rgb(20, 93, 203)" style={{ minWidth: "90%" }} className="w-100 py-2 fs-7" />
                        </a>
                    </div>
                    
                </Col>

            </Row>

        </div>
    )
}

export default Project