import React from "react"
import { Link} from "react-router-dom"

const Welcome = () => {
  return (
    <>
      <div className="paper">
        <div className="container-xs">
          <div id="top" class ="row site">
            <div className="row flex-center">
              <div className="text-center">
                <h2>Welcome to a Food Label Data Viz Project!</h2>
              </div>
              <div className="text-center">
                <Link to="/foodarrow" className="paper-bt margin"><h4>First let's take a look at a typical food label ➽</h4></Link>
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