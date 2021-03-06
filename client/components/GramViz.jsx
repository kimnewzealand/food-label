import React , { useRef, useEffect }  from "react"
import * as d3 from 'd3'

const GramViz = ({ width, height, data }) => {
    // The useRef Hook hook persists in between component renders (like state).  Initialize it empty and update its value later 
    const ref = useRef()
    const foodData =[{label: "protein", grams: "0.3", key: "g0", numNodes: 1},
    {label: "fat- saturated", grams: "90", key: "g1", numNodes: 90},
    {label: "carbohydrate - sugar", grams: "0.5", key: "g2", numNodes: 1},
    {label: "fibre", grams: "0", key: "g3", numNodes: 0}]
    const foodCategory = [ 'protein','fatSaturated','carbohydrate' ,'sugars','fibre']
    const foodGroup= ['Fruit','Dairy','Vegetables','Miscellaneous']
    const m = foodGroup.length   // total number of clusters
    const n = 0                     // total number of nodes
    const clusters = new Array(m)   // cluster nodes destination array
    const nodes = []                 // all nodes destination array
    const palette = d3.scaleOrdinal(d3.schemeSet3) // color palette
    const myColor = d3.scaleOrdinal().domain(foodGroup).range(d3.schemeSet1)
    const labelRadius = 4
    // generate cluster node that other nodes in this group orbit around
    
    
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
        .domain([0, foodData.length-1])
        .range([50, width-50]);

        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height/2)      

        svg
            .selectAll('circle')
            .data(foodData)
            .enter()
            .append('circle')
                .attr('fill',"#ffff33" )
                .style("fill-opacity", 0.3)
                .attr("cy",height/4)
                .attr("stroke","#d3d3d3")
                .attr("r",d=>d.grams)
                .attr('transform', (d, i) => 'translate(' + xScale(i) + ', 0)')
        svg
            .selectAll('text')
            .data(foodData)
            .enter()
            .append('text')
                .attr('transform', (d, i) => 'translate(' + xScale(i) + ', 100)')
                .attr("text-anchor", "middle")
                .text(d =>d.label)
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