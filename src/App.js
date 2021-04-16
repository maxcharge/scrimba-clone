import React from 'react';
import './App.css';

import WheelChair from './utilities/Wheelchair-Man.svg'
import WalkingMan from './utilities/ComicCharacter.svg'
import StandingMan from './utilities/user.png'

import Header from './components/Header'
import Body from './components/Body'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
       
      <Header/>

      <div className="app__banner">
        <div className="app__banner__heading__standingman">
          <img src={StandingMan} alt="Standing man"/>
        </div>
        <div className="app__banner__heading" >
          Don't spend $15,000<br/> on a coding<br/> bootcamp
          <div className="app__banner__text">
            Our career path helps motivated students become<br/> hireable frontend developers for 1% of the cost
          </div>
          <div className="app__banner__btn__holder">
          <div className="app__banner__btn">
            Try It Out Now!
          </div>
          </div>
        </div>
        
      </div>

        <div className="app__banner__end">
          <div className="app__banner__end__img__holder">
            <div className="app__banner__end__wheelchair">
              <img src={WheelChair} alt="WheelChair"/>
            </div>
            
            <div className="app__banner__end__walkingman">
              <img src={WalkingMan} alt="Walking man" />
            </div>
          </div>
          
          <div className="app__banner__end__text__holder" >
            <div className="app__banner__end__textbox__1">
              <div>
              A coding community like no other
              </div>
              Not a boring forum. But live events, stand-ups, competitions, and more.
            </div>

            <div className="app__banner__end__textbox__2">
              <div>
                A mind-blowing way to learn to code
              </div>
              Our interactive code-learning tool has been blowing minds since 2017.
            </div>
          </div>

        </div>

      <Body/>
      <Body/>
      <Body/>
      <Body/>
      <Body/>
      <Body/>
      <Body/>
      <Footer></Footer>
    </div>
  );
}

export default App;
