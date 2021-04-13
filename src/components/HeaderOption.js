import React from 'react'
import '../Styles/HeaderOption.css'

function HeaderOption({title}) {
    return (
        <div className="header__option">
            <div>
                {title}
            </div>
        </div>
    )
}

export default HeaderOption
