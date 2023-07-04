import React from 'react';
import {Bar, G2} from '@ant-design/plots';

export const BarChart = ({ data }) => {

    const G = G2.getEngine('canvas');

    const config = {
        data,
        yField: 'program',
        xField: 'value',
        autoFit: false,
        width: 581,
        height: 442,
        yAxis: false,
        xAxis: false,
        legend: false,
        padding: [8, 25, 0, 0],
        intervalPadding: 28,
        scrollbar: {
            type: 'vertical',
            style: {
                trackColor: 'rgba(36, 46, 66, 0.5)',
                thumbColor: 'rgba(59, 138, 197, 0.5)'
            },
        },
        barStyle: {
            fill: 'rgba(59, 138, 197, 0.5)'
        },
        tooltip: {
            customContent: (title, hoverData) => {

                let list = '';
                hoverData.forEach(item => {
                    list +=
                        `<span style='display: block; margin: 10px;'>
                                    ${item.title} - ${item.value}
                                 </span>`
                })
                return `
                    <div style='font-size: 18px; color: #000000; padding: 10px; line-height: 28px'>
                        ${list}
                    </div>`;
            },
            showCrosshairs: false,
            shared: true,
        },
        label: {
            position: 'left',
            formatter: (data) => {
                const group = new G.Group({});
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: -12,
                        y: 0,
                        text: data.program.slice(0, 78),
                        fill: '#F2F6F5',
                        fontSize: 12,
                        fontWeight: 300,
                        fontFamily: 'Montserrat',
                        lineHeight: 12,
                    },
                });

                return group;
            },
        },

    };
    return <Bar {...config} />;
};