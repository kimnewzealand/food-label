import React , { useRef, useEffect }  from "react"
import * as d3 from 'd3'

const GramViz = ({ width, height, data }) => {
    const ref = useRef();

    return (
        <>
        <div className="chart">
            <div className="row flex-center">
                GramViz should be here!
            </div>
            <svg ref={ref}>
                
            </svg>
        </div>
        </>
    )

}

export default GramViz;