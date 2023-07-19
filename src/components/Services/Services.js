import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgPage1 from "../../assets/img/Megatel.jpg";
import imgPage2 from "../../assets/img/Wiplus.jpg";
import imgPage3 from "../../assets/img/Space.jpg";
import CardService from "./CardService/CardService";
import React from 'react';

export default function Services() {
    const servicesArray = [
        {
            title: "MEGATEL",
            subtitle: "Know all about this great company",
            image: imgPage1,
            footer: "Go to the page ➡️",
            link: "https://megatelcolombia.com.co/",
        },
        {
            title: "WIPLUS Comunicaciones",
            subtitle: "Know all about this great company",
            image: imgPage2,
            footer: "Go to the page ➡️",
            link: "https://wiplus.com.co/",
        },
        {
            title: "Space Comunicaciones S.A.S.",
            subtitle: "Know all about this great company",
            image: imgPage3,
            footer: "Go to the page ➡️",
            link: "https://www.spacecomunicaciones.net.co/",
        },
    ];

    return (
        <div className="services p-3 mt-5" id="services">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={9}>
                        <h2 className="text-center">Services of Internet from Sabanalarga</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />                         
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div className="centrar-enlace">
                <a href='#navbarmenu'>To back to top</a>
            </div>

        </div>
    );
}
