import React from "react";

import boysImg from "../images/boys.svg";
import bannerLogo from "../images/bannerCampanhaLogo.svg";

import bannerCampImg1 from "../images/banCamp1.svg";
import bannerCampImg2 from "../images/banCamp2.svg";
import bannerCampImg3 from "../images/banCamp3.svg";

import lineTopImg from "../images/line-header.svg";

import "../style/bannerCampanha.css";

function BannerCampanha() {
    return (
        <div className="campanha-container">
            <div className="banner-campanha">
                <img src={boysImg} className="boys-img" alt="boys-img" />
                <img src={lineTopImg} className="line-top" alt="line-top" />
                <div className="text-wrapper">
                    <img src={bannerLogo} className="main-title" alt="main-title" />
                    <div className="separator">
                        <div className="dates-wrapper">
                            <div>
                                <span className="title">Data de início <br />das matrículas</span>
                                <span className="date">03/11</span>
                            </div>
                            <div>
                                <span className="title">Data de término <br />das matrículas</span>
                                <span className="date">23/12</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <img src={bannerCampImg1} className="icon-detail-1" alt="detail" />
                <img src={bannerCampImg2} className="icon-detail-2" alt="detail" />
                <img src={bannerCampImg3} className="icon-detail-3" alt="detail" />
            </div>
            <a href="https://wa.me/+557999442292" target="_blank" rel="noreferrer">
                Clique aqui para realizar a matrícula do <br /> seu filho(a)
            </a>
        </div>
    )
}

export default BannerCampanha;