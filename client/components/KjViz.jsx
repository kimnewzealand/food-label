import React , { useRef, useEffect }  from "react"
import * as d3 from 'd3'

const KjViz = ({ width, height, data }) => {
    // The useRef Hook hook persists in between component renders (like state).  Initialize it empty and update its value later 
    const ref = useRef()
    const foodData =[{label: "energy", kj: "3050", key: "0", numNodes: 0},
    {label: "protein", grams: "0.3", key: "g0", numNodes: 1},
    {label: "fat- saturated", grams: "90", key: "g1", numNodes: 90},
    {label: "carbohydrate - sugar", grams: "0.5", key: "g2", numNodes: 1},
    {label: "fibre", grams: "0", key: "g3", numNodes: 0}]
    const foodCategory = [ 'protein','fatSaturated','carbohydrate' ,'sugars','fibre']
    const foodGroup= ['Fruit','Dairy','Vegetables','Miscellaneous']
    const palette = d3.scaleOrdinal(d3.schemeSet3) // color palette
    const myColor = d3.scaleOrdinal().domain(foodGroup).range(d3.schemeSet1)

      useEffect(() => {
        const xScale = d3.scaleLinear()
        // D3 creates a function xScale which accepts input between 0 and 3 (the domain) and maps it to output between 50 and 650 (the range).
        .domain([0, foodData.length-1])
        .range([50, width-50]);

        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height/2)      

        svg
            .selectAll('rect')
            .data(foodData)
            .enter()
            .append('rect')
                .attr('fill',"#ffff33" )
                .style("fill-opacity", 0.3)
                .attr("x",width/8)
                .attr("width", d=>d.kj/10)
                .attr("height", d=>d.kj/30)
                .attr("stroke","#d3d3d3")
                .attr('transform', (d, i) => 'translate(' + xScale(i) + ', 0)')
        svg
            .selectAll('text')
            .data(foodData[0])
            .enter()
            .append('text')
                .attr('transform', (d, i) => 'translate(' + xScale(i) + ', 100)')
                .attr("text-anchor", "middle")
                .text(d => d.label)
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

export default KjViz