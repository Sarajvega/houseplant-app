import Link from 'next/link'
import React from 'react'
import firebase from "../../../firebase"


const PlantContent = ({ id, Name, Humidity, Sun, Temperature, Water, ImgURL }) => {

    return (
        <div className="row plant-image-left-info-right content-width">
            <div className="w12 w6md  image">
                <img src={ImgURL}></img>
            </div>

            <div className="w12 w6md">
                <h3>Name</h3>
                <p>{Name}</p>

                <h3>Water</h3>
                <p>{Water}</p>

                <h3>Humidity</h3>
                <p>{Humidity}</p>

                <h3>Sun</h3>
                <p>{Sun}</p>

                <h3>Temperature</h3>
                <p>{Temperature}</p>
            </div>



            <div className="w12 ">
                <button className="go-back">
                <Link href="/list">
                    Go back &rarr;
                </Link>
                </button>
            </div>
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
