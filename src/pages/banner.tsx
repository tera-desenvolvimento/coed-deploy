import React from 'react';

import { setCookie } from "../controllers/cookies.controller"

import bgDeskLeft from "../images/bg-desk-left.svg";
import overlayLeft1 from "../images/overlay-desk-left-1.svg";
import kidsImg from "../images/kids.svg";

import bgDeskRight from "../images/overlay-desk-right-1.svg";
import mainPhrase from "../images/main-phrase.svg";
import lineBottom from "../images/line-bottom.svg";
import coedText from "../images/coed-text.svg";

import tabOverlay from "../images/tab-ov.svg";

import coedLogo from "../images/coed-logo.svg";

import '../style/banner.css';

function Banner() {
    return (
        <React.Fragment>
          <div className="bg-container">
            <div className="desk-left-bg">
              <img src={kidsImg} className="kids" height={"30px"}/>
              <img src={overlayLeft1} className='ov-1'/>
              <img src={bgDeskLeft} className='bg' />
            </div>
            <div className="desk-right-bg">
              <img src={tabOverlay} className="tab-ov" />

              <img src={bgDeskRight} className="ov-right-1" />
              <img src={coedText} className="coed-text" />
            </div>

            <div className="content-container">
              <img src={mainPhrase} className='main-phrase' />

              <span className='middle-span'>Matrículas Abertas</span>

              <div className="separator">
                <div className="dates-wrapper">
                  <span className="title">Data de início <br />das matrículas</span>
                  <span className="date">03/11</span>
                  <span className="title">Data de término <br />das matrículas</span>
                  <span className="date">23/12</span>
                </div>
                <div className="links-wrapper">
                  <span className="title">Selecione o segmento de interesse <br />clicando abaixo</span>
                  <a href="https://wa.me/+557999442292" target="_blank" rel="noreferrer" className='link-1'>
                    <b>Educação Infantil</b>
                  </a>
                  <a href="https://wa.me/+557999442292" target="_blank" rel="noreferrer" className='dual link-2'>
                    <b>Anos Iniciais</b>
                    <span>Ensino Fundamental I</span>
                    </a>
                  <a href="https://wa.me/+557999442292" target="_blank" rel="noreferrer" className='dual link-3'>
                    <b>Anos Finais</b>
                    <span>Ensino Fundamental II</span>
                  </a>
                </div>
              </div>

              <a href="/" className='main-link' onClick={() => setCookie({name: "matriculasPageShowed", value: "true"})}>
                Para acessar o site, clique aqui
              </a>

              <img src={coedLogo} className="coed-logo" />
            </div>

            <img src={lineBottom} className="line-bottom" />
          </div>
        </React.Fragment>
    );
}

export default Banner;