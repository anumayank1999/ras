import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Glide } from 'react-glide';
import 'react-glide/lib/reactGlide.css';
import './App.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Header.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AutoSlider = () => {
    return (<>
        <AutoplaySlider className='abc'
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={5000}
  >
            <div className='sizee' data-src={require("./img/Ai.jpg")} />
            <div className='sizee' data-src={require("./img/car.jpg")} />
            <div className='sizee' data-src={require("./img/we.jpg")} />
            </AutoplaySlider>
        
        </>
    );
};

export default AutoSlider;
