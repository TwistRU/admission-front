import React from "react";

import styles from './ApprovalsCard.module.css';

export const ApprovalsCard = ({ approvals }) => {

    const {
        total,
        today
    } = approvals;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                    Оригиналов
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
                        сегодня
                    </div>
                    <div className={styles.count}>
                        {today}
                    </div>
                </div>
            </div>
        </div>
    )
}