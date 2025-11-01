import React from 'react';

import Header from '../components/header';
import BannerCampanha from '../components/bannerCampanha';
import InfoCards from '../components/infoCards';
import InfoList from '../components/infoList';
import CtaBanner from '../components/ctaBanner';
import StructureSlider from '../components/structureSlider';
import SocialSession from '../components/socialSession';
import Footer from '../components/footer';

import lineHeader from "../images/line-header.svg";

import '../style/home.css';

function Home() {
    return (
        <React.Fragment>
            <div className="home-container">
                <Header />
                <img src={lineHeader} className="line-header" />
                <BannerCampanha />
                <InfoCards />
                <InfoList />
                <CtaBanner />
                <StructureSlider />
                <SocialSession />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home;