import React from 'react'
import '../Styles/HeaderOption.css'

function HeaderOption({title}) {
    return (
        <div className={title==="Go Pro!" ? "header__option__blue" : "header__option"}>
            <div>
                {title}
            </div>
        </div>
    )
}

export default HeaderOption
