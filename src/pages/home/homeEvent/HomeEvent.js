import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import CountDown from "./homeEventCount/CountDown";
import EventInfo from "./homeEventInfo/EventInfo";
import s from "./HomeEvent.module.css"



const Styles = styled.div `

  .col {
   margin: 0 auto;
   text-align: center;
  }
`
const HomeEvent = () => {
    return (
        <div className={s.wrapper}>
            <Styles>
                <Container >
                    <Row className={s.content}>
                        <Col lg={4}  md={6}>
                            <CountDown/>

                        </Col>
                        <Col lg={6} md={8} sm={"auto"}>

                            <EventInfo/>
                       </Col>
                    </Row>
                </Container>
            </Styles>
        </div>
    );
};

export default HomeEvent;