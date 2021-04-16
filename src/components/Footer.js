import React from 'react'
import '../Styles/Footer.css'
import vidtile from '../utilities/videotilescrimba.png'
import foundertile from "../utilities/founders.jpg";
import logo from'../utilities/ScrimbaLogo.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__discord">
                Join Discord
                <div className="footer__discord__status">
                    1000+ <span></span> Online
                </div>
                <div className="footer__discord__btn">
                    Enter Chat
                </div>
            </div>
            
            <div className="footer__about">
                <div className="footer__about__working">
                    <div className="footer__about__working__img__holder">
                    <img src={vidtile} alt=""/>
                    </div>
                    <div>
                        <div >
                        About the platform
                        </div>
                        Scrimba is the next-generation platform for learning how to code. Our screencasts enable you to interact with the code directly in the player. This way, you'll have more fun and learn faster.
                        <br/>
                        <br/>
                        Our courses cover subjects like HTML, CSS, JavaScript, React, Vue, and more. They're all made with the goal of advancing your career. So pick a course and give your career a boost!
                    </div>
                </div>
                <div className="footer__about__founders">
                    <div>
                        <div >
                        About the platform
                        </div>
                        Our goal is to create the best possible coding school at the lowest possible cost for students. If we succeed with this, it’ll give anyone who wants to become a software developer a realistic shot at succeeding. Regardless of where they live and the size of their wallets.                
                        <p className="quote__box" >
                        “To achieve this, we’ve created a new video format for code screencasts. We call it “scrims”.
                        </p>
                        This format is the backbone of our school. Not only because it results in a superior learning experience. But also because it enables us to iterate more quickly, to attract better teachers, to facilitate better peer-learning, to keep server costs low, and much more.
                    </div>
                    <div className="footer__about__founders__img__holder" >
                        <img src={foundertile} alt=""/>
                    </div>
                </div>
            </div>

            <div className="footer__end">
                <div className="footer__left">
                    <img src={logo} alt="logo"/>
                <div className="of__img">
                <br/><br/>Home<br/><br/>Discord<br/><br/>Twitter<br/><br/>youtube<br/><br/>
                </div>
                </div>

                <div className="footer__right">
                    <div className="of__right">
                        <div className="title">
                            Resources
                        </div>
                    <br/><br/>Blog<br/><br/>FAQ<br/><br/>Terms<br/><br/>Privacy<br/><br/>
                    </div>
                    <div className="of__right">
                        <div className="title">
                                Courses
                        </div>
                    <br/><br/>All courses<br/><br/>Intro courses<br/><br/>Learn JavaScript<br/><br/>Learn React<br/><br/>
                    </div>
                    <div className="of__right">
                        <div className="title">
                            Company     
                        </div>
                    <br/><br/>About us<br/><br/>Contact us<br/><br/>Support chat<br/><br/>Gift membership<br/><br/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
