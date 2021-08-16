import React from 'react'
import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const PlantItem = ({plant}) => {
    return (
        // get id from specific article
        <Link href="/Plant/[id]" as={`/Plant/${plant.id}`}>
            <a className={articleStyles.card}>
            <h3>{plant.Name} &rarr;</h3>
            <img src={plant.ImgURL}></img>
            </a>
        </Link>
    )
}

export default PlantItem
