import React from 'react'
import PlantList from "../components/PlantList"
import firebase from "../firebase"


const setPlants = (snapshot) => {
    plants = snapshot.val()
}

var plants;

export default function List({ plantData }) {
    const [plants, setPlants] = React.useState(plantData)
    return (
        <div>
            <PlantList plants={plants} />
        </div>
    )
}

export async function getStaticProps() {

    const plants = await firebase.database().ref("Plants").once('value').then(snapshot => {
        return snapshot.val()
    })
    return {
        props: {
            plantData: plants
        }
    }
};