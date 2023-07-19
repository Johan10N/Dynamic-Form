import { useState } from "react";
import {
    Col,
    Container,
    FloatingLabel,
    Form,
    Modal,
    Row
}  from "react-bootstrap";
import Resume from "../Resume";
import Select from "react-select";

const options=[
    {id:1, value:"Comida Italiana", label:"Comida Italiana 🍕"},
    {id:2, value:"Comida Asiatica", label:"Comida Asiatica  🍜"},
    {id:3, value:"Comida Francesa", label:"Comida Francesa  🥐"},
    {id:4, value:"Comida Mexicana", label:"Comida Mexicana  🌮"},
    {id:5, value:"Comida Española", label:"Comida Española  🥘"},
    {id:6, value:"Comida Colombiana", label:"Comida Colombiana  🍲"},
];

export default function FourStep({setStep}) {
    const [selectOption, setSelectOption]=useState(null);
    const movieSer= JSON.stringify(selectOption);
    localStorage.setItem("movie", movieSer);
    
    const [modal, setModal]= useState(false);

    // const onChangeAdditionalMovie = (e) =>{
    //     const movie = e.target.value;
    //     localStorage.setItem("additionalHobbie", movie);
    // };
    return (
        <div>
            <h2>Select your favourite Movie Genre</h2>
            <h4>Tell me about your hobbies</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Select your hobbies</h5>
                        <Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                </Row>
                <br></br>
                {<div className="send-form">
                    <p  className="result p-3 " onClick={()=> setModal(true)}>
                        View result 🙌
                    </p>
                
                </div>}
                {modal && (
                    <Resume showModal={modal} setModal={setModal} setStep={setStep}/>
                )}
            </Container>
        </div>
    );
}
