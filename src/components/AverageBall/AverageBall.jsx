import React from 'react';

import styles from './AverageBall.module.css';
import ChartLines from '../SmallChartLines/ChartLines';

export const AverageBall = ({ average, color }) => {
    const { data, total } = average;

    const chartData = [
        {
            id: 'average',
            data: data.map((item) => ({x: item.label, y: item.value.toFixed(2)})),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>СРЕДНИЙ БАЛЛ ЕГЭ</div>
            <div className={styles.count}>{total.toFixed(2)}</div>
            <div className={styles.chart}>
                <ChartLines
                    data={chartData}
                    color={color}
                    className={styles.chart}
                />
            </div>
        </div>
    );
};
