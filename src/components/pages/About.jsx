import React from 'react';
import image from '../../assets/image1.JPG';

const About = () => {
  return (
    <section id="about-me">
      <h1>About Me</h1>
      <div className="about-me-container">
        <img src={image} alt="Sarah-Hantz" className="about-me-image" />
        <p>
        Hello, my name is Sarah Hantz and I am an aspiring web developer with a foundation in HTML, CSS, JavaScript, and React, along with experience in APIs, testing, and CI/CD pipelines. I am passionate about creating responsive and user-friendly websites. With a drive to continuously learn, I thrive on solving challenges and building innovative solutions. I am always excited to expand my skill set and contribute to projects that make an impact.
        </p>
      </div>
    </section>
  );
};

export default About;
