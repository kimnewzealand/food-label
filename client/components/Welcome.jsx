import React from "react"
import { Link} from "react-router-dom"
import * as d3 from 'd3'
import {useSpring, animated} from 'react-spring'
import WelcomeCircles from './WelcomeCircles'

const Welcome = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <>
    {/* <div className="paper"> */}
        <div className="container-xs">
          <div id="top" class ="row site">
            <div className="row flex-center">
              <div className="text-center">      
                <animated.h2 style={props}>Welcome to a Food Label Data Viz Project!</animated.h2>      
                <WelcomeCircles />
              </div>     
              <div className="text-center">
                <Link to="/foodarrow" className="paper-bt margin"><h4>Take a look at a typical food label ➽</h4></Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      {/* </div> */}
    </>
  )
}
export default Welcome