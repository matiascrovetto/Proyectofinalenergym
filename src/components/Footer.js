import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className="info_section layout_padding2-top">
        <div className="container">
          <div className="info_form">
            <h4>
              Our Newsletter
            </h4>
            <form action>
              <input type="text" placeholder="Enter your email" />
              <div className="d-flex justify-content-end">
                <button>
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h6>
                About Energym
              </h6>
              <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation u
              </p>
            </div>
            <div className="col-md-2 offset-md-1">
              <h6>
                Menus
              </h6>
              <ul>
                <li className=" active">
                  <a className href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className>
                  <a className href="about.html">About </a>
                </li>
                <li className>
                  <a className href="service.html">Services </a>
                </li>
                <li className>
                  <a className href="#contactSection">Contact Us</a>
                </li>
                <li className>
                  <a className href="#">Login</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>
                Useful Links
              </h6>
              <ul>
                <li>
                  <a href>
                    Adipiscing
                  </a>
                </li>
                <li>
                  <a href>
                    Elit, sed
                  </a>
                </li>
                <li>
                  <a href>
                    do Eiusmod
                  </a>
                </li>
                <li>
                  <a href>
                    Tempor
                  </a>
                </li>
                <li>
                  <a href>
                    incididunt
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>
                Contact Us
              </h6>
              <div className="info_link-box">
                <a href>
                  <img src="images/location-white.png" alt="" />
                  <span> No.123, loram ipusm</span>
                </a>
                <a href>
                  <img src="images/call-white.png" alt="" />
                  <span>+01 12345678901</span>
                </a>
                <a href>
                  <img src="images/mail-white.png" alt="" />
                  <span> demo123@gmail.com</span>
                </a>
              </div>
              <div className="info_social">
                <div>
                  <a href>
                    <img src="images/facebook-logo-button.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/twitter-logo-button.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/linkedin.png" alt="" />
                  </a>
                </div>
                <div>
                  <a href>
                    <img src="images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer