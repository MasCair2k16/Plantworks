import React, { useEffect } from 'react';
import Style from '../styles/Home.module.css';
// import StepBox from '../components/StepBox'
function HomePage() {

  return (
    <>
      <div className={Style.homeContainer}>
          <div>
            <div className={Style.container}>
              <h1 className={Style.title}>Discover <br></br> your plant&apos;s <br></br>  potential</h1>
              {/* <h1 style={{backgroundColor: 'grey'}}>IMAGE</h1> */}
            </div>
            <div className={Style.description}>
              <span>Needing to learn how to care for your plants has <br></br> never been this simple.</span>
            </div>
          </div>
          <div className={Style.steps}>
            <div className={Style.stepBox}>
              <h1>Step 1</h1>
              <span>Search for a plant</span>
            </div>
            <div className={Style.stepBox}>
              <h1>Step 2</h1>
              <span>Read the details about your plant</span>
            </div>
            <div className={Style.stepBox}>
              <h1>Step 3</h1>
              <span>Provide care for your plant</span>
            </div>
            <div className={Style.stepBox}>
              <h1>Step 4</h1>
              <span>And have your plant smiling :D</span>
            </div>
              {/* <StepBox stepTitle='Step 1' stepDesc='Search for a plant' />
              <StepBox stepTitle='Step 2' stepDesc='Read the details about your plant' />
              <StepBox stepTitle='Step 3' stepDesc='Provide care for your plant' />
              <StepBox stepTitle='Step 4' stepDesc='And have your plant smiling :D' /> */}
          </div>
      </div>
    </>
    );
}

export default HomePage;
