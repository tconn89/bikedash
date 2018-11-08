import {Card } from '@rmwc/card';

import React from 'react';
import PropTypes from 'prop-types'
import {Typography} from '@rmwc/typography';

import 'chart.js/dist/Chart.min.js'

export default class LineChart extends React.Component {
    constructor(props){
        super(props)
        this.id = 'lineChartRoot-' + Math.floor(Math.random() * 10000)
    }
    componentDidMount(){
        lineChart(this.id, this.props)
    }
    render() {

        const props = this.props;
        return (
            <Card style={{width: '100%', padding: '10px'}}>
                <Typography style={{marginBottom: '20px', borderBottom: 'lightgrey 1px solid'}} use='headline6'> {props.title}</Typography>
                <canvas id={this.id}></canvas>
            </Card>
        );
    }
}

LineChart.propTypes = {
    title: PropTypes.string,
    xLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            dataPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
            label: PropTypes.string,
            color: PropTypes.string,
            fill: PropTypes.bool
        }
    )),
    labels: PropTypes.array
}

// TODO background color parsing and validation
const default1 = 'rgba(51, 179, 90, 1)';
let lineChart = (id, props) => new window.Chart(document.getElementById(id).getContext('2d'), {
    type: 'line',
    data: {
        labels: props.xLabels,
        datasets: props.data.map(data => 
            ({
                label: data.label || "Data Set One",
                fill: data.fill || true,
                lineTension: 0.3,
                backgroundColor: fillColor(data.color || default1),
                borderColor: data.color || default1,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                borderWidth: 1,
                pointBorderColor: default1,
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: data.color || "#222",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.dataPoints,
                spanGaps: false
            }))
    }
});

function fillColor(color){
    const rgb = color.match(/\d+/g).map(Number).slice(0,3)
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.38)`
}
