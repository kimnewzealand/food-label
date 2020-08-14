import React from "react"
import GroupLegend from './GroupLegend'

const dataset = [1,2,3,4]

const Butter = () => {
  return (
    <>
        <div id="top" className ="row site">
            <div className="row flex-center">
                <p>Food Group Legend</p>
                <GroupLegend width={600} height={400} data={dataset} />
            </div>
            <div className="row">
            <div className="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible"></input>
                <label for="collapsible1">Butter, salted</label>
                <div className="collapsible-body">
                    <div className="row flex-center">
                        <div className="text-center">
                            <div className="card" >
                                <table>     
                                    <h4>Nutrition Information Panel</h4>
                                            <tr>
                                                <th></th>
                                                <td>QUANTITY PER 100 g</td>
                                            </tr>
                                            <tr>
                                                <th>Energy</th>
                                                <td>3050kj</td>
                                            </tr>
                                            <tr>
                                                <th>Protein</th>
                                                <td>0.5g</td>
                                            </tr>
                                            <tr>
                                                <th>Fat Total</th>
                                                <td>82.1g</td>
                                            </tr>
                                            <tr>
                                                <th> - Saturated</th>
                                                <td>53.1g</td>
                                                </tr>
                                            <tr>
                                                <th>Carbohydrate</th>
                                                <td>0.4g</td>
                                            </tr>
                                            <tr>
                                                <th> - Sugar</th>
                                                <td>0.4g</td>
                                            </tr>
                                            <tr>
                                                <th>Fibre</th>
                                                <td>0g</td>
                                            </tr>
                                            <tr>
                                                <th>Sodium</th>
                                                <td>547mg</td>
                                            </tr>        
                                    </table>    
                    {/* <img src="./img/butter_saltedNIP.png" alt="salted butter Nutrition information panel"/> */}
                </div>
                </div> 
    </div>
  </div>
  <div className="collapsible">
     <input id="collapsible1" type="checkbox" name="collapsible"></input>
    <label for="collapsible1">Butter, unsalted</label>
     <div className="collapsible-body">
            <div className="row flex-center">
              <div className="text-center">
                    <table>     
                       <h3>Butter Unsalted</h3>
                            <tr>
                                <th></th>
                                <td>QUANTITY PER 100 g</td>
                            </tr>
                            <tr>
                                <th>Energy</th>
                                <td>3110kj</td>
                            </tr>
                            <tr>
                                <th>Protein</th>
                                <td>0.3g</td>
                            </tr>
                            <tr>
                                <th>Fat Total</th>
                                <td>83.5g</td>
                            </tr>
                            <tr>
                                <th> - Saturated</th>
                                <td>54.1g</td>
                                </tr>
                            <tr>
                                <th>Carbohydrate</th>
                                <td>0.5g</td>
                            </tr>
                            <tr>
                                <th> - Sugar</th>
                                <td>0g</td>
                            </tr>
                            <tr>
                                <th>Fibre</th>
                                <td>0g</td>
                            </tr>
                            <tr>
                                <th>Sodium</th>
                                <td>7mg</td>
                            </tr>    
                    </table> 
                    </div>
                </div>
                </div>         
                </div>       
              </div>
          </div>
      </div>
    </>
  )
}
export default Butter