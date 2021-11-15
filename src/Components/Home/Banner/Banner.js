import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import slideOne from '../../../image/img-home-slideshow-2.jpg'
import slideTwo from '../../../image/img-home-slideshow.jpg'
import slideThere from '../../../image/img-home-slideshow-3.jpg'
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel controls={false} >
                <Carousel.Item className="my-sliders">
                    <img
                        className="d-block w-100 vh-100"
                        src={slideThere}
                        alt="First slide"
                    />
                    <Carousel.Caption className="slider one">
                        <span className='heigh-light'>Taking rides to a newer level</span>
                        <h1>putting a reliable
                            <br />
                            machine on road
                        </h1>
                        <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt
                            <br />
                            labore et dolore magna aliqua quis ipsum suspendisse.
                        </p>
                        <h2>KEYMOTO</h2>
                        <Link to="/bikes"><button className="mt-4 banner-btn">MOTOCYCLES</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-sliders">
                    <img
                        className="d-block w-100 vh-100"
                        src={slideTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="slider two">
                        <span className='heigh-light'>Taking rides to a newer level</span>
                        <h1>the combination of
                            <br />
                            power & perfection
                        </h1>
                        <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt
                            <br />
                            labore et dolore magna aliqua quis ipsum suspendisse.
                        </p>
                        <h2>KEYMOTO</h2>
                        <Link to="/bikes"><button className="mt-4 banner-btn">MOTOCYCLES</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="my-sliders">
                    <img
                        className="d-block w-100 vh-100"
                        src={slideOne}
                        alt="There slide"
                    />

                    <Carousel.Caption className="slider there">
                        <span className='heigh-light'>Taking rides to a newer level</span>
                        <h1>modern designed
                            <br />
                            for a Sleek look
                        </h1>
                        <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt
                            <br />
                            labore et dolore magna aliqua quis ipsum suspendisse.
                        </p>
                        <h2>KEYMOTO</h2>
                        <Link to="/bikes"><button className="mt-4 banner-btn">MOTOCYCLES</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;