import React from "react"
import { Link} from "react-router-dom"

const FoodArrow = () => {
  //https://fsymbols.com/signs/arrow/
  return (
    <>
        <div className="paper">
            <div className="row flex-center">
                <a href="https://www.heartfoundation.org.nz/wellbeing/healthy-eating/how-to-read-food-labels">The Heart Foundation NZ has guidance on how to read labels ...</a>
            </div>
            <div className="container-xs">
                <div className="row flex-center">
                    <img  width="30%" popover-top="Popover on top"
                    src="https://www.heartfoundation.org.nz/media/images/nutrition/general-images/food-label-reading_737_553.jpg" alt=""/>
                </div>
                <div className="row flex-center">                  
                    <Link to="/butter" ><h4>Visualise a food label instead ➽</h4></Link>
                </div>
            </div>
        </div>
    </>
  )
}
export default FoodArrow

// interactive D3
//https://towardsdatascience.com/react-d3-the-macaroni-and-cheese-of-the-data-visualization-world-12bafde1f922