import React from "react"

const Header = () => {
  return (
        <div className="section">
            <nav className="border fixed split-nav">
                <div className="nav-brand" >
                    <h3><a href="#">Food Label Viz</a></h3>
                </div>
                <div className="collapsible">
                    <input id="collapsible2" type="checkbox" name="collapsible0"/>
                    <label for="collapsible2">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar2"></div>
    
                    </label>
                    <div className="collapsible-body">
                        <ul className="inline">
                            <li><a href="https://github.com/kimnewzealand/food-label">Github</a></li>
                            <li><a href="https://www.foodcomposition.co.nz/">Source Data</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  )
}
export default Header