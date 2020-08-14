import React , { useRef, useEffect }  from "react"
import * as d3 from 'd3'
//https://www.pluralsight.com/guides/d3-treemap-in-react
const GroupLegend = ({ width, height, data }) => {
    const ref = useRef();
    const foodGroup= ['Fruit','Dairy','Meat','Vegetables']
    //Add a colour palette 
    const palette = d3.scaleOrdinal(d3.schemeSet3)
    
    useEffect(() => {
        const xScale = d3.scaleLinear()
            // D3 creates a function xScale which accepts input between 0 and 3 (the domain) and maps it to output between 50 and 650 (the range).
            .domain([0, foodGroup.length-1])
            .range([50, width-50]);    

        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height/4)
            // .style("border", "1px solid black")

            svg
                .selectAll('rect')
                .data(foodGroup)
                .enter()
                .append('rect')
                .attr("x",-12)
                .attr("width", 25)
                .attr("height", 25)
                .attr('fill', d => palette(d))
                .attr("stroke", "black")
                .attr('transform', (d, i) => 'translate(' + xScale(i) + ',20)')

                svg
                .selectAll('text')
                .data(foodGroup)
                .enter()
                .append('text')
                  .attr('transform', (d, i) => 'translate(' + xScale(i) + ', 70)')
                  .attr("text-anchor", "middle")
                  .text(d=>d)
    }, []);

    const draw = () => {
        
    }
    useEffect(() => {
        draw();
    }, [data]);

    return (
        <>
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        </>
    )

}

export default GroupLegend;