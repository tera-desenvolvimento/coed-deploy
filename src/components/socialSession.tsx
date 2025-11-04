import React from "react";

import socialTitleImg from "../images/social-title.svg";
import socialTitleMobImg from "../images/social-title-mob.svg";
import socialCard1Img from "../images/social-card-1.svg";
import socialCard2Img from "../images/social-card-2.svg";
import socialCard3Img from "../images/social-card-3.svg";
import socialSmartphoneImg from "../images/social-smartphone.svg";
import line1Img from "../images/social-line-1.svg";
import line2Img from "../images/social-line-2.svg";

import ov1img from "../images/info-list-ov-3.svg";

import "../style/socialSession.css";

function SocialSession() {
    return (
        <div className="social-session-container">
            <img src={socialTitleImg} alt="title" className="title desk" />
            <img src={socialTitleMobImg} alt="title" className="title mob" />

            <div className="social-wrapper">
                <div className="images-wrapper">
                    <img src={socialCard1Img} alt="social-img" className="social-img-1" />
                    <img src={socialCard2Img} alt="social-img" className="social-img-2" />
                    <img src={socialCard3Img} alt="social-img" className="social-img-3" />
                    <img src={line1Img} alt="ov-line-1" className="ov-line-1" />
                </div>
                <img src={socialSmartphoneImg} alt="smartphone" className="smartphone" />
                <img src={ov1img} alt="ov-img-1" className="ov-img-1" />
                <img src={line2Img} alt="ov-line-2" className="ov-line-2" />
            </div>
        </div>
    )
}

export default SocialSession;