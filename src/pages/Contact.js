import React from 'react'

export const Contact = () => {
    return (
        <div>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            <span>
                                Get In Touch
                            </span>
                        </h2>
                    </div>
                    <div className="layout_padding2-top">
                        <div className="row">
                            <div className="col-md-6 ">
                                <form action>
                                    <div className="contact_form-container">
                                        <div>
                                            <div>
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                            <div className="mt-5">
                                                <input type="text" placeholder="Message" />
                                            </div>
                                            <div className="mt-5">
                                                <button type="submit">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="map_container">
                                    <div className="map-responsive">
                                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;