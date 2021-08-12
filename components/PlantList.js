import React from 'react'
import articleStyles from '../styles/Article.module.css'
import PlantItem from './PlantItem'

// see if u can make bucket public to access w/o access token.?

export const PlantList = ({ plants }) => {
    return (
        <div className={articleStyles.grid}>
            {plants.map((plant) => (
                <PlantItem plant={plant} />
            ))}
        </div>
    )
}
export default PlantList
