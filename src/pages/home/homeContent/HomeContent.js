import React from 'react';
import s from "./HomeContent.module.css"

import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import HomeCardOne from '../../../assets/homeCardImage/volunteering.jpg';
import HomeCardTwo from '../../../assets/homeCardImage/voluneering_1.jpg';
import HomeCardThree from '../../../assets/homeCardImage/camp.jpg';

const HomeContent = () => {
    return (
        <div className={s.cardContainer}>
            <Container className={s.wrapper}>
                <div className={s.sectionTitle}>
                    <h2 >
                        Our<strong> Blog</strong>
                    </h2>
                    <p className={s.infoTitle}>I’m fancy heading shortcode description and above is the Heading!</p>
                </div>
                <Row >
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Image  src={HomeCardOne}/>
                            <Card.Body>
                                <Card.Title>Вонтерство</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="secondary" size="lg">
                                    Large button
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem'}}>

                            <Image src={HomeCardTwo}/>
                            <Card.Body>
                                <Card.Title>Гумонітарна Допомога</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="secondary" size="lg">
                                    Large button
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Image src={HomeCardThree} />
                            <Card.Body>
                                <Card.Title>Дітячій Табір</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="secondary" size="lg">
                                    Large button
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeContent;