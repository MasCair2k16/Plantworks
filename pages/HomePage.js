import React, { useEffect } from 'react';
import Style from '../styles/Home.module.css';
function HomePage() {

  return (
    <div className={Style.homeContainer}>
        <div>
          <div className={Style.container}>
            <h1 style={{FontFamily: 'Helvetica',}}>Discover <br></br> your plant's <br></br>  potential</h1>
            <h1 style={{backgroundColor: 'grey'}}>IMAGE</h1>
          </div>
          <div className={Style.description}>
            <span>Find or add a plant to help others </span>
          </div>
        </div>
        <div style={{backgroundColor: 'green'}}>
          <p>Chad description</p>
        </div>
    </div>
    );
}

export default HomePage;
