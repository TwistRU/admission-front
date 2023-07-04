import React from "react";

import styles from './ApplicationsCard.module.css';

import ChartLines from "../SmallChartLines/ChartLines";

export const ApplicationsCard = ({ applications, color }) => {

    const {
        data,
        total,
        today_online,
        today_offline
    } = applications;

    const chartData = [
        {
            id: 'applications',
            data: data.map((item) => ({x: item.label, y: item.value})),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    ЗАЯВЛЕНИЙ
                </div>
                <div className={styles.chart}>
                    <ChartLines
                        data={chartData} color={color} className={styles.chart}
                    />
                </div>
            </div>
            <div className={styles.stats}>
                <div>
                    <div className={styles.head}>
                        всего
                    </div>
                    <div className={styles.firstCount}>
                        {total}
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        сегодня<br/>Суперсервис
                    </div>
                    <div className={styles.count}>
                        {today_online}
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        сегодня<br />priem.dvfu.ru
                    </div>
                    <div className={styles.thirdCount}>
                        {today_offline}
                    </div>
                </div>
            </div>
        </div>
    )
}