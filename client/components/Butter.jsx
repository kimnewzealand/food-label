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
                <table>
  <thead>
    <tr>
      <th>Food</th>
      <th>Energy</th>
 <th>Protein</th>
 <th>Fat Total</th>
 <th>Fat Saturated</th>
 <th>Carbohydrate</th>
 <th>Sugars</th>
 <th>Fibre</th>
 <th>Sodium</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Butter Salted</td>
      <td>3050</td>
    <td>0.5</td>
    <td>82.1</td>
    <td>53.1</td>
   <td>0.4</td>
   <td>0.4</td>
<td>0</td>
<td>547</td>
    </tr>
</tbody>
</table>
                    {/* <img src="./img/butter_saltedNIP.png" alt="salted butter Nutrition information panel"/> */}
                    <div className="card-body">
              
                    </div>
                </div>
                <p></p>
                <div className="card" >
                <table>
  <thead>
    <tr>
      <th>Food</th>
      <th>Energy</th>
 <th>Protein</th>
 <th>Fat Total</th>
 <th>Fat Saturated</th>
 <th>Carbohydrate</th>
 <th>Sugars</th>
 <th>Fibre</th>
 <th>Sodium</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Butter Unsalted</td>
      <td>3110</td>
    <td>0.3</td>
    <td>83.5</td>
    <td>54.1</td>
   <td>0.5</td>
   <td>0.5</td>
<td>0</td>
<td>7</td>
    </tr>
</tbody>
</table>
                {/* <img src="./img/butter_unsaltedNIP.png" alt="salted butter Nutrition information panel"/> */}
                    <div className="card-body">
             
                    </div>
                </div>
             
              </div>
          </div>
      </div>
    </>
  )
}
export default Welcome