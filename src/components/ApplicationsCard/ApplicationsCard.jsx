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
                        {Object.values(totalBudget).reduce((partialSum, part) => partialSum + part.BudgetQuota, 0)}
                    </div>
                    <div className={styles.firstCount}>
                        {Object.values(totalBudget).reduce((partialSum, part) => partialSum + part.TargetQuota, 0)}
                    </div>
                    <div className={styles.firstCount}>
                        {Object.values(totalBudget).reduce((partialSum, part) => partialSum + part.SpecialQuota, 0)}
                    </div>
                    <div className={styles.firstCount}>
                        {Object.values(totalBudget).reduce((partialSum, part) => partialSum + part.SeparateQuota, 0)}
                    </div>
                    <div className={styles.firstCount}>
                        {Object.values(total.FullCost).reduce((partialSum, part) => partialSum + Object.values(part).reduce((partialSum2, part2) => partialSum2 + part2, 0), 0)}
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        всего<br/>Суперсервис
                    </div>
                    <div className={styles.firstCount}>
                        {totalBudget.SuperService.BudgetQuota}
                    </div>
                    <div className={styles.firstCount}>
                        {totalBudget.SuperService.TargetQuota}
                    </div>
                    <div className={styles.firstCount}>
                        {totalBudget.SuperService.SpecialQuota}
                    </div>
                    <div className={styles.firstCount}>
                        {totalBudget.SuperService.SeparateQuota}
                    </div>
                    <div className={styles.firstCount}>
                        {total.FullCost.SuperService.BudgetQuota}
                    </div>
                </div>
                <div>
                    <div className={styles.head}>
                        всего<br/>priem.dvfu.ru
                    </div>
                    <div className={styles.thirdCount}>
                        {totalBudget.Web.BudgetQuota}
                    </div>
                    <div className={styles.thirdCount}>
                        {totalBudget.Web.TargetQuota}
                    </div>
                    <div className={styles.thirdCount}>
                        {totalBudget.Web.SpecialQuota}
                    </div>
                    <div className={styles.thirdCount}>
                        {totalBudget.Web.SeparateQuota}
                    </div>
                    <div className={styles.thirdCount}>
                        {total.FullCost.Web.BudgetQuota}
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