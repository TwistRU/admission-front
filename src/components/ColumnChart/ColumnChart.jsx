import React, { useState } from 'react';
import { Column } from '@ant-design/plots';
import {Select} from "antd";

const { Option } = Select;

const ColumnChart = ({ average_ege, hignballs }) => {

    const shortSchools = {
        'Институт математики и компьютерных технологий (Школа)': 'ИМКТ',
        'Восточный институт - Школа региональных и международных исследований':
            'ШРМИ',
        'Школа искусств и гуманитарных наук': 'ШИГН',
        'Школа педагогики': 'ШП',
        'Юридическая школа': 'ЮШ',
        'Школа экономики и менеджмента': 'ШЭМ',
        'Школа медицины': 'ШМ',
        'Институт наукоемких технологий и передовых материалов (Школа)':
            'ИНТПМ',
        'Политехнический институт (Школа)': 'ПИ',
        'Институт наук о жизни и биомедицины (Школа)': 'ИНЖБ',
        'Институт Мирового океана (Школа)': 'ИМ',
    };

    const [selectActive, setSelectActive] = useState('average_ege');
    const handleChange = value => {
        setSelectActive(value);
    };
    const data = selectActive === 'average_ege' ? average_ege : hignballs;

    const config = {
        data,
        xField: 'school',
        yField: 'value',

        xAxis: {
            label: {
                autoHide: false,
                autoRotate: false,
                style: {
                    fill: '#F2F6F5',
                    fontSize: 10,
                    fontWeight: 300,
                    fontFamily: 'Montserrat',
                    lineHeight: 12,
                },
                formatter: (text, item) => {
                    return shortSchools[text];
                },
                offset: 32,
            },
            grid: {
                line: {
                    style: {
                        stroke: '#0F172E',
                    },
                },
            },
            line: {
                style: {
                    stroke: '#0F172E',
                },
            },
            tickLine: {
                style: {
                    stroke: '#0F172E',
                },
            },
        },
        yAxis: {
            label: {
                style: {
                    fill: '#F2F6F5',
                },
                offset: 52,
            },
            grid: {
                line: {
                    style: {
                        stroke: '#0F172E',
                    },
                },
            },
        },
        tooltip: {
            customContent: (title, hoverData) => {
                let list = '';
                hoverData.forEach(item => {
                    list += `<span style='display: block; margin: 10px; width: 100%'>
                                    ${item.title} - ${item.value.slice(0, 5)}
                                 </span>`;
                });
                return `
                    <div style='font-size: 18px; color: #000000; padding: 10px; line-height: 24px'>
                        ${list}
                    </div>`;
            },
            showCrosshairs: false,
            shared: true,
        },
        color: 'rgba(59, 138, 197, 0.5)',
    };


    return (
        <>
            <Select
                showArrow
                defaultValue={selectActive}
                onChange={handleChange}
                style={{ width: 220 }}
            >
                <Option value="average_ege">Средний балл ЕГЭ</Option>
                <Option value="highballs">“Высокобальники” 270+</Option>
            </Select>
            <Column {...config} />
        </>
    );
};

export default ColumnChart;
