import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState} from "react";

export const fruits = [
    {
        id:1,
        icon:"🍅",
        name:"Tomato",
        //description:"Some quick example to build on the card title and make up the bulk of the card's content",
    },
    {
        id:2,
        icon:"🫐",
        name:"BlueBerries",
        //description:"Some quick example to build on the card title and make up the bulk of the card's content",
    },
    {
        id:3,
        icon:"🍌",
        name:"Banana",
        //description:"Some quick example to build on the card title and make up the bulk of the card's content",
    },
    {
        id:4,
        icon:"🍐",
        name:"Pear",
        //description:"Some quick example to build on the card title and make up the bulk of the card's content",
    },
    {
        id:5,
        icon:"🍉",
        name:"Watermelon",
        //description:"Some quick example to build on the card title and make up the bulk of the card's content",
    },
    {
        id:6,
        icon:"🍎",
        name:"Apple",
        //description:"Some quick example to build on the card title and make up the bulk of the card's content",
    },
];

export default function FirstStep() {
    const [selectedCard, setSelectedCard] = useState(null);

    const clickCard = (fruit) =>{
        setSelectedCard(fruit.id);
        localStorage.setItem("fruitName", fruit.name);
        localStorage.setItem("iconFruit", fruit.icon);
    };


    return(
        <div>
            <h2>Choose your favorite Fruit</h2>
            <h4>Select your fruit and then click the button of "Next Step"</h4>
            <Container className="p-5 text-center">
                <Row xs={10} md={3} className="g-4">
                    {fruits.map ((fruit, index)=>(
                        <CardFruit
                            fruit={fruit}
                            key={index}
                            clickCard={clickCard}
                            selectedCard={selectedCard}
                        />
                    ))}
                </Row>
            </Container>

            <div>
                <a href='#navbarmenu'>To back to top</a>
            </div>

        </div>
    );    
}
