import Link from 'next/link'
import React from 'react'
import firebase from "../../../firebase"


const PlantContent = ({ id, Name, Humidity, Sun, ImgURL }) => {

    return (
        <div>
            <h3>This is plant id: {id}</h3>

            <h3>Name</h3>
            <p>{Name}</p>
            <p>{Humidity}</p>
            <p>{Sun}</p>
            <p>IMG below</p>

            <img src={ImgURL}></img>


            <Link href="/">
                Go back &rarr;
            </Link>

        </div>

    )
}

export async function getStaticProps({ params }) {
    // handles individual page. knows which plant based off of id in the params. 
    // can't pass master list of info into get static props so we make a second query. 
    const plants = await firebase.database().ref("Plants").once('value').then(snapshot => {
        return snapshot.val()
    })
    // builds obj of id with more info to populate page.
    const plant = plants.find((plant) => plant.id === params.id)

    return {
        props: plant
    }
};

export async function getStaticPaths() {
    // gets all ids possible
    const plants = await firebase.database().ref("Plants").once('value').then(snapshot => {
        return snapshot.val()
    })
    // params expects and obj that has key 'id'
    const paths = plants.map((plant) => ({
        params: plant,
    }))
    return { paths, fallback: false }
}

export default PlantContent
