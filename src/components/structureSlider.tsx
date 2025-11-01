import React from "react";

import structureTitle from "../images/structureTitle.svg";
import slideImg1 from "../images/slides/slide-1.svg";
import slideImg2 from "../images/slides/slide-2.svg";
import slideImg3 from "../images/slides/slide-3.svg";
import slideImg4 from "../images/slides/slide-4.svg";
import slideImg5 from "../images/slides/slide-5.svg";
import slideImg6 from "../images/slides/slide-6.svg";
import slideImg7 from "../images/slides/slide-7.svg";
import slideImg8 from "../images/slides/slide-8.svg";
import slideImg9 from "../images/slides/slide-9.svg";

import "../style/structureSlider.css";

function StructureSlider() {
    return (
        <div className="structure-slider-container">
            <img src={structureTitle} alt="structure-title" className="structure-title" />

            <div className="structure-slider slider">
                <ul className="slider-track">
                    <li className="slide"><img src={slideImg1} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg2} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg3} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg4} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg5} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg6} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg7} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg8} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg9} alt="slide-img" className="slide-img"/></li>
                </ul>
                <ul className="slider-track">
                    <li className="slide"><img src={slideImg1} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg2} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg3} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg4} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg5} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg6} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg7} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg8} alt="slide-img" className="slide-img"/></li>
                    <li className="slide"><img src={slideImg9} alt="slide-img" className="slide-img"/></li>
                </ul>
            </div>

        </div>
    )
}

export default StructureSlider;