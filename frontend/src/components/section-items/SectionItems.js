import React from 'react';
import Slider from 'react-slick';
import './SectionItems.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SectionItems = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="section-items">
            <Slider {...settings}>
                <div className="slider-item">
                    <div className="slider-item-title">
                        <h1>NIKE GTA I-WALK</h1>
                    </div>
                    <img src="/assets/I-WALK.png" alt="I-WALK" />
                    <div className="slider-item-info">
                        <div className="slider-item-buttons">
                            <button className="buy-button">Pré - commander</button>
                        </div>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slider-item-title">
                        <h1>NIKE GTA I-GEAR</h1>
                    </div>
                    <img src="/assets/I-GEAR.png" alt="I-GEAR" />
                    <div className="slider-item-info">
                        <div className="slider-item-buttons">
                            <button className="buy-button">Pré - commander</button>
                        </div>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slider-item-title">
                        <h1>NIKE GTA I-TRACK</h1>
                    </div>
                    <img src="/assets/I-TRACK.png" alt="I-TRACK" />
                    <div className="slider-item-info">
                        <div className="slider-item-buttons">
                            <button className="buy-button">Pré - commander</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

export default SectionItems;
