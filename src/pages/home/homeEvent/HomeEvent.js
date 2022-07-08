import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import CountDown from "./homeEventCount/CountDown";
import EventInfo from "./homeEventInfo/EventInfo";
import s from "./HomeEvent.module.css"


const Styles = styled.div`
 .container {
   //background: #e4ebef;
   //height: 500px;
   //min-width: 100%;
   //margin-bottom: 40px;
   //padding-bottom: 80px;
   //align-items: center;

 }
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
                    <Row>
                        <Col md={6}>
                            <CountDown/>
                        </Col>
                        <Col md={6} >
                            <EventInfo/>
                       </Col>
                    </Row>
                </Container>
            </Styles>
        </div>
    );
};

export default HomeEvent;