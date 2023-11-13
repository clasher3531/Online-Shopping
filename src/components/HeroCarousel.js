import React from "react";

function HeroCarousel() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require('../images/hero1.jpg')} className="d-block w-100" alt="..." height="700px"/>
                </div>
                <div className="carousel-item">
                    <img src={require('../images/hero2.jpg')} className="d-block w-100" alt="..." height="700px"/>
                </div>
                <div className="carousel-item">
                    <img src={require('../images/hero3.jpg')} className="d-block w-100" alt="..." height="700px"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HeroCarousel;