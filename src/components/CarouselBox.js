import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import homeImg from "../assets/home_img.jpeg";
import slider1 from  "../assets/slider1.jpeg";
import slider2 from  "../assets/slider2.jpeg";
import slider3 from  "../assets/slider3.jpeg";

const Styles = styled.div`
.carousel-item  {
  
  max-height: 400px;
}
`

const CarouselBox = () => {
    return (
        <div>
         <Styles>
             <Carousel
                 indicators={false}
             >
                 <Carousel.Item >
                     <img
                         className="d-block w-100"
                         src={ homeImg }
                     />
                     <Carousel.Caption>
                         <h1>Hopes - Love The Lord!</h1>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item >
                     <img
                         className="d-block w-100"
                         src={ slider1 }
                     />
                     <Carousel.Caption>
                         <h1>Hopes - Love The Lord!</h1>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item >
                     <img
                         className="d-block w-100"
                         src={ slider2 }
                     />
                     <Carousel.Caption>
                         <h1>Hopes - Love The Lord!</h1>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item >
                     <img
                         className="d-block w-100"
                         src={ slider3 }
                     />
                     <Carousel.Caption>
                         <h1>Hopes - Love The Lord!</h1>
                     </Carousel.Caption>
                 </Carousel.Item>
             </Carousel>
         </Styles>
        </div>
    );
};

export default CarouselBox;