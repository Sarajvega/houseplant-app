
import homeStyles from '../styles/Home.module.css'
import React from "react"
import Link from 'next/dist/client/link'

export default function Home() {
  return (
      <div className="row w9">
          <div className="w12 w6md home-font">
            <h3 className="home-font-sub"> 
              New plant but not sure what it is?
            </h3>
            <h2> We can help</h2>
            <button className="button">
              <Link href="/camera" >Identify now &rarr; </Link>
            </button>
          </div>

          <div className="w12 w6md">         
              <img src="images/monstera-deliciosa.png" className={homeStyles.img}></img>
          </div>
          
      </div>)
}