import React from 'react'

export const About = () => {
    return (
        <div>
           <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              About Energym
            </h2>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/about-img.png" alt="" />
            </div>
            <div className="detail-box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
              </p>
              <a href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default About;
