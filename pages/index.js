
import homeStyles from '../styles/Home.module.css'
import React from "react"
import Link from 'next/dist/client/link'
// const loadPlants = (ref) => {
//   getPlants(ref).then(setPlants)
// }

// const getPlants = (ref) => {
//   return ref.once('value');
// }

export default function Home() {
  return (
      <div className="row w9">
          <div className="w12 w6md home-font">
            <h3 className=""> 
              New plant but not sure what it is?
            </h3>
            <h2> We can help</h2>
            <button className="button">
              <Link href="/camera" >Identify now &rarr; </Link>
            </button>
          </div>

          {/* <div className={`${homeStyles.svg} ${homeStyles.w12} ${homeStyles.w6md}`}>    */}
          <div className="w12 w6md">         

              <img src="images/monstera-deliciosa.png" className={homeStyles.img}></img>
              
          </div>
          
      </div>)
}