import React from 'react';
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
    );
};

export default HomeDonate;