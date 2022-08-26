import React from 'react';
import s from "../homeBlog/Blog.module.css";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import HomeCardOne from "../../../assets/homeCardImage/home_card_1.jpeg";
import HomeCardTwo from "../../../assets/homeCardImage/home_card_2.jpeg";
import HomeCardThree from "../../../assets/homeCardImage/home_card_3.jpeg";

const Blog = () => {
    return (
        <div className={s.cardContainer}>
            <Container>
                <div className={s.sectionTitle}>
                    <h2 >
                        Our<strong> donate</strong>
                    </h2>
                    <p className={s.infoTitle}>I’m fancy heading shortcode description and above is the Heading!</p>
                </div>
                <Row>
                    <Col style={{paddingBottom:20}}>
                        <Card style={{ width: '18rem' }}>
                            <Image src={HomeCardThree}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <p>
                                    <a href='#' target="_blank">
                                        <span>Some quick example text to build
                                    bulk of the card's content.</span>
                                    </a>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{paddingBottom:20}}>
                        <Card style={{ width: '18rem' }}>
                            <Image src={HomeCardTwo}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <p>
                                    <a href='#' target="_blank">
                                        <span>Some quick example text to build
                                    bulk of the card's content.</span>
                                    </a>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{paddingBottom:20}}>
                        <Card style={{ width: '18rem' }}>
                            <Image src={HomeCardOne}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <p>
                                    <a href='#' target="_blank">
                                        <span>Some quick example text to build
                                    bulk of the card's content.</span>
                                    </a>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{paddingBottom:20}}>
                        <Card style={{ width: '18em' }}>
                            <Image src={HomeCardThree}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <p>
                                    <a href='#' target="_blank">
                                        <span>Some quick example text to build
                                    bulk of the card's content.</span>
                                    </a>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;

