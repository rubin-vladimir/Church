import React from 'react';
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
    );
};

export default HomeDonate;