import React from "react"
import { Link} from "react-router-dom"

const Welcome = () => {
  return (
    <>
      <div id="top" class ="row site">
            <div className="row flex-center">
              <div className="text-center">
                <h2>Welcome to a Food Label Data Viz Project!</h2>
                <p>The purpose of this website is to visualise relative food labelling data and Nutrition Information Panels from food packaging to make this process of interpretation a little bit easier. </p>
              <Link to="/butter" className="paper-bt margin">First let's take a look at butter  ...</Link>
              </div>
          </div>
      </div>
    </>
  )
}
export default Welcome