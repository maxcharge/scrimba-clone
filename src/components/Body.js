import React from 'react'
import Card from './Card'
import '../Styles/Body.css'

function Body() {
    return (
        <>
            <div className="app__body">
                
                <div className="app__body__heading">
                    <a> Course Title </a>  
                
                </div>
                
                <div className="app__body__cards">
                    <div className="a">
                    <Card/>
                    <Card/>
                    </div>
                    <div  className="b">
                    <Card/>
                    <Card/>
                    </div>
                </div>

                <div className="app__body__btn__holder">
                    <div className="app__body__btn">
                        See All
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body
