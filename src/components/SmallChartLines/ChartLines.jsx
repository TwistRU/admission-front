import React from 'react';
import chartConfig from './chartLines.chart';
import {numberWithSpaces} from "../../common/functions";

import {ResponsiveLine} from '@nivo/line'

const tooltipStyle = {
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'rgb(174 174 174) 0px 0px 10px',
    borderRadius: '3px',
    color: 'rgb(89, 89, 89)',
    padding: '.5rem',
    fontSize: '16px',
    width: 180,
    textAlign: 'center'
};

const ChartLines = ({data, color, className}) => {

    const chartTooltip = ({point}) => {
        const period = `${point.data.x} год`;

        return (
            <div style={tooltipStyle}>
                <strong>
                    {period} - {numberWithSpaces(point.data.y)}
                </strong>
            </div>
        );
    };

    return !data || isEmptyChartLineData(data[0].data) ? null : (
        <div className={className}>
            <ResponsiveLine
                {...{
                    ...chartConfig.options,
                    colors: color,
                }}
                data={data}
                tooltip={chartTooltip}
            />
        </div>
    );
};

export default ChartLines;

const isEmptyChartLineData = data => {
    return (
        !Array.isArray(data) ||
        data.length === 0
    );
};