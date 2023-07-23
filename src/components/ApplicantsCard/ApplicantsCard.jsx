import React from "react";

import styles from './ApplicantsCard.module.css';
import ChartLines from "../SmallChartLines/ChartLines";

export const ApplicantsCard = ({ applicants }) => {

    const {
        total,
        total_superservice,
        total_web,
        data
    } = applicants;

    const chartData = [
        {
            id: 'applicants',
            data: data.map((item) => ({x: item.label, y: item.value})),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    АБИТУРИЕНТОВ
                </div>
                <div className={styles.chart}>
                    <ChartLines
                        data={chartData} color='#3B8AC5' className={styles.chart}
                    />
                </div>
            </div>
            <div className={styles.stats}>
                <div>
                    <div className={styles.head}>
                        всего
                    </div>
                    <div className={styles.firstCount}>
                        13893
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        всего<br/>Суперсервис
                    </div>
                    <div className={styles.count}>
                        11314
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        всего<br />priem.dvfu.ru
                    </div>
                    <div className={styles.thirdCount}>
                        2672
                    </div>
                </div>
            </div>
        </div>
    )
}