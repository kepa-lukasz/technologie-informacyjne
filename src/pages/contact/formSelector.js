import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Selector(){

    const [contactList, setContact] = useState([

    ])



    return(
        <Container className="choiceForm">
            <button>
                RealDeal
            </button>
            <button>
                WebDev
            </button>
            <button>
                test2
            </button>
            <button>
                test3
            </button>
            <button>
                test4
            </button>
        </Container>
    )
}