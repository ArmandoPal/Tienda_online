import React, { useState } from "react";
import "./SliderS.css"; // Importa los estilos
import akira from '../../images/akira.jpg';
import akira2 from '../../images/akira2.jpg';
import prueba from '../../images/prueba.jpg';

const ImageSlider: React.FC = () => {
    const images = [akira, akira2, prueba];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="slide">
                        <img src={img} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>

            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default ImageSlider;
