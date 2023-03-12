import React, { useState } from 'react';
import { Slider } from 'react-bootstrap';
import "../assets/slider.css"
const Sliderb = () => {
    const [sliderValue, setSliderValue] = useState(50);

    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="cards-wrapper">
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-1-card-1.jpg" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-1-card-2.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-1-card-3.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="cards-wrapper">
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-2-card-1.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-2-card-2.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-2-card-3.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="cards-wrapper">
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/bootstrap-multiple-items-carousel-slide-3-card-1.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-3-card-2.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="image-wrapper">
                                    <img src="https://codingyaar.com/wp-content/uploads/multiple-items-carousel-slide-3-card-3.jpg" alt="..."/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <p class="mt-5 text-center">Get a step-by-step written explanation here: <a href="https://codingyaar.com/bootstrap-4-carousel-multiple-items-responsive/" target="_blank">Bootstrap Carousel Card Slider
            </a> </p>

            <p class="mt-3 text-center">Get a step-by-step video explanation here: <a href="https://youtu.be/kHPm_AlxP7U" target="_blank">Bootstrap Carousel Card Slider
            </a> 
            </p>
        </div>
    );
};

export default Sliderb;