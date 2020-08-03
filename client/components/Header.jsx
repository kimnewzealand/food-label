import React, { Component } from "react"

const Header = () => {
  return (
        <nav className="border fixed">
            <div className="nav-brand" >
                <h4><a href="#">Food Label Viz</a></h4>
            </div>
            <div className="collapsible">
            <input id="collapsible2" type="checkbox" name="collapsible2"/>
            <label for="collapsible2">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </label>
            <div className="collapsible-body">
            <ul className="inline">
                <li><a href="#">About</a></li>
                <li><a href="#">Github</a></li>
            </ul>
            </div>
        </div>
        </nav>

  )
}
export default Header