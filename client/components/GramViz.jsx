import React , { useRef, useEffect }  from "react"
import * as d3 from 'd3'

const GramViz = ({ width, height, data }) => {
    // The useRef Hook hook persists in between component renders (like state).  Initialize it empty and update its value later 
    const ref = useRef()
    const m = 4   // total number of clusters
    const n = 0                     // total number of nodes
    const clusters = new Array(m)   // cluster nodes destination array
    const nodes = []                 // all nodes destination array
    const palette = d3.scaleOrdinal(d3.schemeSet3) // color palette
    const labelRadius = 4
    // generate cluster node that other nodes in this group orbit around
    
    const foodCategory = [ 'protein','fatSaturated','carbohydrate' ,'sugars','fibre']

  
    let clusterNode =  {
        isClusterNode: true,
        key: 0,
        label: "node",
        cluster: 1,
        radius: labelRadius,
        x: width / 2,
        y: height / 2
      }
    // add cluster node to node
    nodes.push(clusterNode)
    console.log(nodes)
      useEffect(() => {
        const xScale = d3.scaleLinear()
        // D3 creates a function xScale which accepts input between 0 and 3 (the domain) and maps it to output between 50 and 650 (the range).
        .domain([0, foodCategory.length-1])
        .range([50, width-50]);

        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height/4)      
         
        svg
            .selectAll('text')
            .data(foodCategory)
            .enter()
            .append('text')
                .attr('transform', (d, i) => 'translate(' + xScale(i) + ', 70)')
                .attr("text-anchor", "middle")
                .attr('fill', "#ffff33")
                .attr('stroke', "black")
                .text(d =>d)
    },[])

    const draw = () => {
        
    }

    useEffect(() => {
        draw()
    },[4])

    return (
        <>
        <div className="row flex-center">
        </div>
            <svg ref={ref}>
                
            </svg>
        </>
    )

}

export default GramViz