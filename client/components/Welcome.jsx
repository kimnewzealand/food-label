import React from "react"
import { Link} from "react-router-dom"
import * as d3 from 'd3'

const circle_data = [50,200,400];
const palette = d3.scaleOrdinal(d3.schemeSet3)

const Welcome = () => {
  return (
    <>
      <div className="paper">
        <div className="container-xs">
          <div id="top" class ="row site">
            <div className="row flex-center">
              <div className="text-center">
                <h2>Welcome to a Food Label Data Viz Project!</h2>
                <svg width="300" height="80">
                  { circle_data.map((a, i) => (
                    <circle
                      key={i}
                      cx={(i * 100) + 30}
                      cy="50"
                      r={Math.sqrt(a)}
                      style={{ fill:  palette() }}
                    />
                  ))}
              </svg>
              </div>
              <div className="text-center">
                <Link to="/foodarrow" className="paper-bt margin"><h4>Take a look at a typical food label ➽</h4></Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  )
}
export default Welcome