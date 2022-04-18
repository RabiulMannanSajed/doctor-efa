import React, { useState } from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';

import drEefa from '../../../image/bannarImages/dr.Efa.png';
import teeth1 from '../../../image/bannarImages/teeth1.jpg';
import teeth2 from '../../../image/bannarImages/teeth2.jpg';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100  carousel-img"
                    src={drEefa}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='carousel-text'>Hi! This is Dr.Efa</h3>
                    <h4 className='carousel-text'>I am a dentist. I have been serving since 2020.
                        In my experience I see that people are indifferent
                        to their dental care. Young children and older people
                        (those who eat more betel leaves) come to us more.
                        <b> Healthy teeth can give you a healthy life.</b></h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={teeth2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-text'>Dental hygienists are boss of the floss</h3>
                    <p className='carousel-text'>Place the dental floss in between two teeth.
                        Gently glide the floss up and down, rubbing
                        it against both sides of each tooth. Don't glide
                        the floss into your gums. This can scratch or bruise your gums.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={teeth1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='carousel-text'>Life is short.Smile while you still have teeth</h3>
                    <p className='carousel-text'>A healthy smile can truly transform our visual appearance,
                        the positivity of our mind-set, as well as improving the
                        health of not only our mouth but our body too                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;