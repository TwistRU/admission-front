import React, { useState } from 'react';
import {Bar, G2} from '@ant-design/plots';
import { Select } from 'antd';

const { Option } = Select;
export const BarChart = ({ bachelor, magistracy}) => {

    const [selectActive, setSelectActive] = useState('bachelor');
    const handleChange = value => {
        setSelectActive(value);
    };

    const G = G2.getEngine('canvas');
    let data = selectActive === "bachelor" ? bachelor : magistracy;

    const config = {
        data,
        yField: 'program',
        xField: 'value',
        autoFit: false,
        width: 1600,
        height: 600,
        yAxis: false,
        xAxis: false,
        legend: false,
        padding: [8, 25, 0, 0],
        intervalPadding: 30,
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
                        `<span style='display: block; margin: 5px;'>
                            <table>
                                <div style='max-width: 330px'>${item.title} - ${item.value}</div>
                                <tr>
                                    <td>
                                         Квота
                                    </td>
                                    <td>
                                         КЦП
                                    </td>
                                    <td>
                                         Ориг.
                                    </td>
                                    <td>
                                         Без
                                    </td>
                                    <td>
                                         Балл
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                         Общие места
                                    </td>
                                    <td>
                                        ${item.data.quotas.BudgetQuotaCount}
                                    </td>
                                    <td>
                                        ${item.data.ratings.BudgetQuota[1]}
                                    </td>
                                    <td>
                                        ${item.data.ratings.BudgetQuota[0]}
                                    </td>
                                    <td>
                                        ${item.data.score.BudgetQuota}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                         Целевая квота
                                    </td>
                                    <td>
                                        ${item.data.quotas.TargetQuotaCount}
                                    </td>
                                    <td>
                                        ${item.data.ratings.TargetQuota[1]}
                                    </td>
                                    <td>
                                        ${item.data.ratings.TargetQuota[0]}
                                    </td>
                                    <td>
                                        ${item.data.score.TargetQuota}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                         Особая квота
                                    </td>
                                    <td>
                                        ${item.data.quotas.SpecialQuotaCount}
                                    </td>
                                    <td>
                                        ${item.data.ratings.SpecialQuota[1]}
                                    </td>
                                    <td>
                                        ${item.data.ratings.SpecialQuota[0]}
                                    </td>
                                    <td>
                                        ${item.data.score.SpecialQuota}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                         Отдельная квота
                                    </td>
                                    <td>
                                        ${item.data.quotas.SeparateQuotaCount}
                                    </td>
                                    <td>
                                        ${item.data.ratings.SeparateQuota[1]}
                                    </td>
                                    <td>
                                        ${item.data.ratings.SeparateQuota[0]}
                                    </td>
                                    <td>
                                        ${item.data.score.SeparateQuota}
                                    </td>
                                </tr>
                            </table>
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
                        text: data.program.slice(0, 300),
                        fill: '#F2F6F5',
                        fontSize: 15,
                        fontWeight: 400,
                        fontFamily: 'Montserrat',
                        lineHeight: 12,
                    },
                });

                return group;
            },
        },

    };
    return <>
        <Select
            showArrow
            defaultValue={selectActive}
            onChange={handleChange}
            style={{ width: 240 }}
        >
            <Option value="bachelor">Бакалавриат\Специалитет</Option>
            <Option value="magistracy">Магистратура</Option>
        </Select>
        <Bar {...config} />
    </>;
};