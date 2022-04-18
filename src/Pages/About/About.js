import React from 'react';
import './About.css';
import sajed from '../../image/aboutImage/sajed.jpg'
const About = () => {
    return (
        <div className='about-container'>
            <div className='about-blog'>
                <img className='about-img' src={sajed} alt="" />
                <p>Hi, I am Md. Rabiul Manan Said. I am an undergraduate CSE student. I am doing my CSE at UIU in Dhaka. I also learning web development. I wanna be a web developer in the future I also  want to learn software development</p>

            </div>

        </div>
    );
};

export default About;