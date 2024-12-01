import React, { lazy, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Suspense } from "react";
import Aos from "aos";


const Technologies = lazy(()=>import("./services-moduls/technologies"));
const Shadows = lazy(()=>import("./services-moduls/shadows"));
const SubPageImg = lazy(()=>import("./services-moduls/services-Img"));
const Steps = lazy(()=>import("./services-moduls/step"));
const Bottom = lazy(()=>import("./services-moduls/bottom-button"));
const Squares = lazy(()=>import("./services-moduls/squares"));


const Title = lazy(()=>import("./services-moduls/title"));


const Services = (props) => {
    const [path, setpath] = useState(require(`./JSONS/${props.lang}/${props.page}.json`))


    useEffect(() => {

        

        document.title = `Techsquare | ${props.title}`
        window.scrollTo(0, 0, { duration: 0 })
        
        Aos.init()
    }, [])

    return (
        <Suspense fallback={<p>loading...</p>}>

            <div  >
                {/* <div className="mt-custom-100px">

</div> */}
                <div className=" main">
                    <Shadows />
                    <Container className="pt-5">
                        <Container fluid
                            style={{ zIndex: "3", position: "relative" }}>
                            <Title
                                properties={path.Title1}
                            />
                            <Technologies
                                properties={path.technologies}
                            />
                            <SubPageImg properties={path.img} />
                        </Container>
                    </Container>
                </div>
                <Container fluid
                    className="p-0 m-auto"
                    style={{ backgroundColor: "#2B2934" }}>
                    <div className="m-auto pt-5"
                        style={{ position: "relative", overflow: "hidden" }}>
                        <Squares />
                        <Container fluid className=" mt-4 p-0 py-1 "
                            style={{ backgroundColor: "#19191C", zIndex: 10, position: "relative" }}>
                            <Container>
                                <Title

                                    properties={path.Title2}
                                />
                            </Container>
                        </Container>
                        <div className="pt-5 mt-5 main ">
                            <Container className="pt-4 d-flex flex-wrap mb-5">
                                <Steps
                                    properties={path.Steps}
                                />
                            </Container>
                            <Bottom

                                properties={path.bottom}
                            />
                        </div>
                    </div>
                </Container >
            </div >
        </Suspense>
    )
}
export default Services;