import React from 'react'
import '../Styles/Card.css'
import Pluto from '../utilities/Pluto.svg'

function Card({title}) {
    return (
        <div className="card">
            <div className="card__heading">
                The React <br/> Bootcamp
            </div>
            <div className="card__content">
                <img 
                    src={Pluto} 
                    alt="Image"
                />
                <p>
                    XXX lessons | YY hours
                    <br/>
                    with ZZZ Schools
                </p>
                <footer>
                    Footer
                </footer>
            </div>
        </div>
    )
}

export default Card
