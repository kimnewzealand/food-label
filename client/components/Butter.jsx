import React from "react"
import GroupLegendViz from './GroupLegendViz'
import GramViz from './GramViz'
import KjViz from './KjViz'

// Todo: To move tables to components

const Butter = () => {
  return (
    <>             
            <div className="container-xs">
                <div className="row flex-center">
                   <h3>Data Viz Prototype - Butters</h3>
                </div>
                <div className="paper"> 
                    <div className="row flex-center">
                        <p>Food Group</p>
                    </div>
                    <div className="row flex-center">
                        <GroupLegendViz width={600} height={400}  />
                    </div>
                </div>
            <div className="row flex-center">
            <div className="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible"></input>
                <label for="collapsible1">Butter, salted</label>
                <div className="collapsible-body">
                    
                    <div className="row flex-center">
                        <div className="text-center">
                            <div className="card" >
                            </div>
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
                                </div>
                            </div> 

                        </div>
                        <div className="row flex-center">
                        <div className="card" >   
                            <h4>Kilojoule Visualisation</h4> 
                            <KjViz width={600} height={400} data={1,2,3,4} />
                        </div>
                        <div className="card" > 
                            <h4>Gram Visualisation</h4> 
                            <GramViz width={600} height={400} data={1,2,3,4} />
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