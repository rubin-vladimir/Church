import React from 'react';
import {Container, Image, Row, Col, Figure} from "react-bootstrap";
import s from "./HomeGallery.module.css"
import CarouselBox from "../../../components/CarouselBox";

const HomeGallery = () => {
    return (
        <>
            <div className={s.cardContainer}>
                <div className={s.sectionTitle}>
                    <h2>
                        Our<strong> Gallery</strong>
                    </h2>
                    <p className={s.infoTitle}>I’m fancy heading shortcode description and above is the Heading!</p>
                </div>
            </div>

               <Row>
                   <CarouselBox/>
               </Row>
        </>
    );
};

export default HomeGallery;