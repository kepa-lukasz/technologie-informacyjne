import React from "react";
import "./styles/services-styles.css"
import { Col} from "react-bootstrap";
import CustomButton from "../../../components/custom-button/custom-button"

const Technologies = ({properties}) => {
    console.log(properties)
    let delay = 0
    const items =  properties.items.map((element)=>{
        delay+=100
        return(
            <div  data-aos="fade-up"  data-aos-delay={delay} style={{width : "130px"}} className="technology-item p-0">
            <CustomButton tabindex={-1}  style={{ padding : "3px"}} text={element} border="red" className=" w-100 h-100 p-0 border-light rounded rounded-pill  m-0" />
            </div>
        )
    })
    return (
        <div>
            <p className="pt-4">{properties.subtitle}</p>
            <Col className=" zindex-10 ">
            <p className="ubuntu-light mt-5 ">
                    { properties.text}
                </p>
               <div className="d-flex flex-wrap gap-2 gap-md-4" >
                    {items}
               </div>
            </Col>

        </div>
    )
}
export default Technologies;