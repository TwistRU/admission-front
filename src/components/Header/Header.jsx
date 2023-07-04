import React from "react";

import styles from './Header.module.css';

import {ReactComponent as LogoFEFU} from "../../assets/images/logo.svg";
import {format, parseISO} from 'date-fns'
import { ru } from 'date-fns/locale'


export const Header = ({ refreshDate }) => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                <LogoFEFU />
                <h2>
                    ПриёмнаяКампания 2023
                </h2>
            </div>

            <div>
                <div className={styles.todayDate}>
                    {format( new Date(), 'dd MMMM yyyy', {locale: ru})}
                </div>
                <div className={styles.refreshDateTitle}>
                    Дата обновления:
                </div>
                <div className={styles.refreshDate}>
                    {refreshDate && format( parseISO(refreshDate), 'dd MMMM yyyy HH:mm', {locale: ru})}
                </div>
            </div>
        </div>
    )
}