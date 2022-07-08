import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import homeImg from "../assets/home_img.jpeg";
import slider1 from  "../assets/slider1.jpeg";
import slider2 from  "../assets/slider2.jpeg";
import slider3 from  "../assets/slider3.jpeg";


const CarouselBox = () => {
    return (
        <div>
             <Carousel
                 indicators={false}
                 fade
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
        </div>
    );
};

export default CarouselBox;