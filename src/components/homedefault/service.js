import React from 'react';
import { FiMonitor , FiActivity, FiNavigation } from "react-icons/fi";

const Service = () => {
    return (
        <div className="rn-service-area rn-section-gapBottom">
            {/* Start Service Area  */}
            <div className="rn-service-area">
                <div className="container">
                    <div className="row">

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <FiMonitor />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Web Development</h4>
                                        <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <FiActivity />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Creative Design</h4>
                                        <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <FiNavigation />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Brand Identity</h4>
                                        <p>Web design is a similar process of creation, with the intention of presenting...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                    </div>
                </div>
            </div>
            {/* End Service Area  */}

        </div>
    )
}

export default Service;