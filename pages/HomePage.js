import React, { useEffect } from 'react';
import Style from '../styles/Home.module.css';
function HomePage() {

  return (
    <div className={Style.homeContainer}>
        <div>
          <div className={Style.container}>
            <h1 className={Style.title}>Discover <br></br> your plant's <br></br>  potential</h1>
            <h1 style={{backgroundColor: 'grey'}}>IMAGE</h1>
          </div>
          <div className={Style.description}>
            <span>Needing to learn how to care for your plants has <br></br> never been this simple.</span>
          </div>
        </div>
        <div className={Style.steps}>
          <div className={Style.stepBox}>
            <h1>Step 1</h1>
            <span>Find a plant that you like</span>
          </div>
          <div className={Style.stepBox}>
            <h1>Step 2</h1>
            <span>Learn how to care for your plant</span>
          </div>
          <div className={Style.stepBox}>
            <h1>Step 3</h1>
            <span>Enjoy your new plant</span>
            </div>
          <div className={Style.stepBox}>
            <h1>Step 4</h1>
            <span>Enjoy your new plant</span>
          </div>
        </div>
    </div>
    );
}

export default HomePage;
