import React from "react"
import { Link} from "react-router-dom"

const Welcome = () => {
  return (
    <>
      <div id="top" class ="row site">
            <div className="row flex-center">
              <div className="text-center">
                <h2>A Comparison of Butters</h2>

                <div className="card" >
                    <img src="./img/butter_saltedNIP.png" alt="salted butter Nutrition information panel"/>
                    <div className="card-body">
                    <h4 class="card-title">Butter A</h4>
                    </div>
                </div>
                <div className="card" >
                    <img src="./img/butter_unsaltedNIP.png" alt="unsalted butter Nutrition information panel"/>
                    <div className="card-body">
                    <h4 class="card-title">Butter B</h4>
                    </div>
                </div>
             
              </div>
          </div>
      </div>
    </>
  )
}
export default Welcome