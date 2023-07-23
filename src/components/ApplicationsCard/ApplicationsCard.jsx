import React from "react";

import styles from './ApplicationsCard.module.css';

import ChartLines from "../SmallChartLines/ChartLines";

export const ApplicationsCard = ({ applications, color }) => {

    const {
        data,
        total,
        today
    } = applications;

    const chartData = [
        {
            id: 'applications',
            data: data.map((item) => ({x: item.label, y: item.value})),
        },
    ];
    const totalBudget = total.Budget
    const todayBudget = today.Budget

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
                    </div>
                    <div className={styles.head}>
                        Общие места
                    </div>
                    <div className={styles.head}>
                        Целевые места
                    </div>
                    <div className={styles.head}>
                        Особая квота
                    </div>
                    <div className={styles.head}>
                        Отдельная квота
                    </div>
                    <div className={styles.head}>
                        Платные места
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        всего
                    </div>
                    <div className={styles.firstCount}>
                        46634
                    </div>
                    <div className={styles.firstCount}>
                        327
                    </div>
                    <div className={styles.firstCount}>
                        945
                    </div>
                    <div className={styles.firstCount}>
                        978
                    </div>
                    <div className={styles.firstCount}>
                        13614
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        всего<br/>Суперсервис
                    </div>
                    <div className={styles.firstCount}>
                        39420
                    </div>
                    <div className={styles.firstCount}>
                        192
                    </div>
                    <div className={styles.firstCount}>
                        736
                    </div>
                    <div className={styles.firstCount}>
                        771
                    </div>
                    <div className={styles.firstCount}>
                        11296
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        всего<br/>priem.dvfu.ru
                    </div>
                    <div className={styles.thirdCount}>
                        7394
                    </div>
                    <div className={styles.thirdCount}>
                        135
                    </div>
                    <div className={styles.thirdCount}>
                        209
                    </div>
                    <div className={styles.thirdCount}>
                        207
                    </div>
                    <div className={styles.thirdCount}>
                        2318
                    </div>
                </div>
                {/*<div>*/}
                {/*    <div className={styles.head}>*/}
                {/*        сегодня<br/>Суперсервис*/}
                {/*    </div>*/}
                {/*    <div className={styles.count}>*/}
                {/*        {todayBudget.SuperService.BudgetQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.count}>*/}
                {/*        {todayBudget.SuperService.TargetQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.count}>*/}
                {/*        {todayBudget.SuperService.SpecialQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.count}>*/}
                {/*        {todayBudget.SuperService.SeparateQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.count}>*/}
                {/*        {today.FullCost.SuperService.SeparateQuota}*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <div className={styles.head}>*/}
                {/*        сегодня<br />priem.dvfu.ru*/}
                {/*    </div>*/}
                {/*    <div className={styles.thirdCount}>*/}
                {/*        {todayBudget.Web.BudgetQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.thirdCount}>*/}
                {/*        {todayBudget.Web.TargetQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.thirdCount}>*/}
                {/*        {todayBudget.Web.SpecialQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.thirdCount}>*/}
                {/*        {todayBudget.Web.SeparateQuota}*/}
                {/*    </div>*/}
                {/*    <div className={styles.thirdCount}>*/}
                {/*        {today.FullCost.Web.BudgetQuota}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}