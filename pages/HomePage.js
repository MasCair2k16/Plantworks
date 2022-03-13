import React, { useEffect } from 'react';
import Style from '../styles/Home.module.css';
import navigationBar from '../components/navigationBar'
import StepBox from '../components/StepBox'
function HomePage() {

  return (
    <>
    <navigationBar />
      <div className={Style.homeContainer}>
          <div>
            <div className={Style.container}>
              <h1 className={Style.title}>Discover <br></br> your plant's <br></br>  potential</h1>
              {/* <h1 style={{backgroundColor: 'grey'}}>IMAGE</h1> */}
            </div>
            <div className={Style.description}>
              <span>Needing to learn how to care for your plants has <br></br> never been this simple.</span>
            </div>
          </div>
          <div className={Style.steps}>
              <StepBox stepTitle='Step 1' stepDesc='Search for a plant' />
              <StepBox stepTitle='Step 2' stepDesc='Read the details about your plant' />
              <StepBox stepTitle='Step 3' stepDesc='Provide care for your plant' />
              <StepBox stepTitle='Step 4' stepDesc='And have your plant smiling :D' />
          </div>
      </div>
    </>
    );
}

export default HomePage;
