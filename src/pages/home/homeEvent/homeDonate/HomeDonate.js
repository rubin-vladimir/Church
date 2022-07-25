import React from 'react';
<<<<<<< HEAD
import {Container, Image, Row, Col, Figure} from "react-bootstrap";
import ImageFooter from '../../../../assets/homeCardImage/image-sub.jpeg';

import s from "./HomeDonate.module.css"
import CarouselBox from "../../../../components/CarouselBox";




const HomeDonate = () => {
    return (
        <>
            <div className={s.cardContainer}>
                <div className={s.sectionTitle}>
                    <h4>
                        Our<strong> Gallery</strong>
                    </h4>
                    <p>I’m fancy heading shortcode description and above is the Heading!</p>
                </div>
            </div>

               <Row>
                   <CarouselBox />
               </Row>
        </>
=======
import {Container, Image, Row,Col} from "react-bootstrap";
import ImageFooter from '../../../../assets/homeCardImage/image-sub.jpeg';
import s from "./HomeDonate.module.css"

const HomeDonate = () => {
    return (
        <div className={s.wrapperInfo}>
            <Image className={s.image} src={ImageFooter}/>

            <Container className={s.wrapperInner}>
                <Row  >
                    <Col md={6} xs={6} style={{top: 30}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda culpa cupiditate expedita ipsam maiohhhhhres minus natus officia pariatur quibusdam
                        , quo tempore vel veniam voluptatem voluptates voluptatum! Ad consequuntur quaerat rerum.</Col>
                    <Col md={6} xs={6} style={{top: 30}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda culpa cupiditate expedita ipsam maiores minus natus officia pariatur quibusdam
                        , quo tempore vel veniam voluptatem voluptates voluptatum! Ad consequuntur quaerat rerum</Col>
                </Row>
            </Container>
        </div>
>>>>>>> origin/master
    );
};

export default HomeDonate;