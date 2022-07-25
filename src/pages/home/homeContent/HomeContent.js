import React from 'react';
import s from "./HomeContent.module.css"

import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import HomeCardOne from '../../../assets/homeCardImage/home_card_1.jpeg';
import HomeCardTwo from '../../../assets/homeCardImage/home_card_2.jpeg';
import HomeCardThree from '../../../assets/homeCardImage/home_card_3.jpeg';

const HomeContent = () => {
    return (
        <div className={s.cardContainer}>
            <Container className={s.wrapper}>
                <h2>
                    Featured<strong> Staff</strong>
                </h2>
                <p>I’m fancy heading shortcode description and above is the Heading!</p>
                <Row>
<<<<<<< HEAD
                    <Col>
                        <Card style={{ width: '20rem' }}>
=======
                    <Col >
                        <Card style={{ width: '30rem' }}>
>>>>>>> origin/master
                            <Image src={HomeCardOne}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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
<<<<<<< HEAD
                    <Col>
                        <Card style={{ width: '20rem' }}>
=======
                    <Col sm>
                        <Card style={{ width: '30rem' }}>
>>>>>>> origin/master
                            <Image src={HomeCardTwo}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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
<<<<<<< HEAD
                    <Col>
                        <Card style={{ width: '20rem' }}>
=======
                    <Col sm>
                        <Card style={{ width: '30rem' }}>
>>>>>>> origin/master
                            <Image src={HomeCardThree}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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