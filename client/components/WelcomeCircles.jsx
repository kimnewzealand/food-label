import React from "react"
import { Link} from "react-router-dom"
import * as d3 from 'd3'

const circle_data = [50,200,400];
const palette = d3.scaleOrdinal(d3.schemeSet3) // color palette
    
const WelcomeCircles = () => {
  return (
    <>
        <svg width="300" height="80">
            { circle_data.map((a, i) => (
                <circle
                    key={i}
                    cx={(i * 100) + 30}
                    cy="50"
                    r={Math.sqrt(a)}
                    fill= {  palette(i) }
                />
            ))}
        </svg>
              
    </>
  )
}
export default WelcomeCircles