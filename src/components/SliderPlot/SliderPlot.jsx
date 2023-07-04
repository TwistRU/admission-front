import React from "react";

import { Line } from '@ant-design/plots';
import styles from './SliderPlot.module.css';

export const SliderPlot = ({ data }) => {

    const config = {
        data,
        padding: 'auto',
        xField: 'date',
        yField: 'count',
        seriesField: 'type',
        legend: {
            layout: 'horizontal',
            position: 'top-right',
            marker: {
                symbol: 'circle'
            },
            itemName: {
                style: () => {
                    return {
                        fill: '#F2F6F5',
                    };
                },
            },
        },
        xAxis: {
            label: {
                style: {
                    fill: '#F2F6F5'
                }
            },
            grid: {
                line: {
                    style: {
                        stroke: '#0F172E'
                    }
                }
            },
            line: {
                style: {
                    stroke: '#0F172E'
                }
            },
            tickLine: {
                style: {
                    stroke: '#0F172E'
                }
            }
        },
        yAxis: {
            label: {
                style: {
                    fill: '#F2F6F5'
                }
            },
            grid: {
                line: {
                    style: {
                        stroke: '#0F172E'
                    }
                }
            }
        },
        slider: {
            height: 40,
            start: 0,
            end: 1,
            textStyle: {
                fill: '#F2F6F5'
            }
        },
        smooth: true,
        tooltip: {
            customContent: (title, hoverData) => {
                let list = '';
                hoverData.forEach(item => {
                    list +=
                        `<span style='display: block; margin: 10px;'>
                                    ${item.name} - ${item.value}
                                 </span>`
                })
                return `
                    <div style='font-size: 18px; color: #000000; padding: 10px'>
                        ${list}
                    </div>`;
            },
            showCrosshairs: true,
            shared: true,
        },
        color: ['#05C985', "#3B8AC5", '#EE423D']
    };

    return (
        <div className={styles.wrapper}>
            <Line {...config} />
        </div>
    )
}