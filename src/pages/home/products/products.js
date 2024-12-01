import { Container } from "react-bootstrap";
import Aps from "./productModule";

import mateupIcon from "../../../images/mateup.png"

import mateupImg from "../../../images/mateup_img.png"

export default function Products({lang}) {
    console.log(lang);
    return (
        <Container fluid className="  pt-5 products-con w-100">

            <Container className="pb-5">

                <div className="mb-5 pb-2" >
                    <h3 className="pb-2 fw-semibold fs-1" style={{position: "relative", letterSpacing: ".1rem" }}>Tworzymy również programy, z którymi mozesz <br />zapoznać się poniżej</h3>
                    <div className="pointer mb-5"  />
                </div>


                {/* TU DODAJEMY PROJEKTY -> CO I JAK WPISYWAĆ JEST OPISANE W PLIKU ourApps.js !! */}

                {/* TAGI
                0 -> ASP.NET;
                1 -> React.JS;

            */}

                <Aps
                    title='MATEUP'
                    icon={mateupIcon}
                    buttonText="przejdź na stronę"
                    text={lang[0].text}
                    desc={lang[0].desc}
                    bgc='linear-gradient(125deg, #1560D1 0%, #0E3A8D 100%)'
                    img={mateupImg} />
            </Container>
        </Container>
    )
}