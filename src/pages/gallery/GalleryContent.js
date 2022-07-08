import React, {useState} from 'react';

import Img1 from './img-gallery/gallery_thumb_1.jpeg';
import Img2 from './img-gallery/gallery_thumb_2.jpeg';
import Img3 from './img-gallery/gallery_thumb_3.jpeg';
import Img4 from './img-gallery/gallery_thumb_4.jpeg';
import Img5 from './img-gallery/gallery_thumb_5.jpeg';
import Img6 from './img-gallery/gallery_thumb_6.jpeg';
import Img7 from '../../assets/slider1.jpeg';
import Img8 from '../../assets/slider2.jpeg';
import Img9 from '../../assets/slider3.jpeg'
import Img10 from './img-gallery/gallery_thumb_7.jpeg';
import Img11 from './img-gallery/gallery_thumb_8.jpeg';

import "./GalleryContent.css";

const GalleryContent = () => {
    let data = [
        {
            id:1,
            imgSrc:Img7,
        },
        {
            id: 2,
            imgSrc:Img2,
        },
        {
            id: 3,
            imgSrc:Img3,
        },
        {
            id: 4,
            imgSrc:Img8,
        },
        {
            id: 5,
            imgSrc:Img5,
        },
        {
            id: 6,
            imgSrc:Img6,
        },
        {
            id: 7,
            imgSrc:Img1,
        },
        {
            id: 8,
            imgSrc:Img4,
        },
        {
            id: 9,
            imgSrc:Img9,
        },
        {
            id: 10,
            imgSrc:Img10,
        },
        {
            id: 11,
            imgSrc:Img11,
        },
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
        console.log(imgSrc)
    }

    return (
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc}/>
            </div>
            <div className="gallery">
                {data.map((item,index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} className="imgGallery"/>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default GalleryContent;