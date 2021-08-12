import headerStyles from '../styles/Header.module.css'

import React from 'react'

export const Header = () => {
    return (
        <div className="w12">
            <h1 className={headerStyles.title}>
                <span>Houseplant.app</span>
            </h1>
            {/* <p className={headerStyles.description}>
                Identify your houseplant.
            </p> */}
        </div>
    )
}

export default Header