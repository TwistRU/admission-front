import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';
import { Header } from '../components/Header/Header';

import {AverageBall} from '../components/AverageBall/AverageBall';
import { SliderPlot } from '../components/SliderPlot/SliderPlot';
import ColumnChart from '../components/ColumnChart/ColumnChart';
import { BarChart } from '../components/BarChart/BarChart';
import { ApplicationsCard } from '../components/ApplicationsCard/ApplicationsCard';
import { ApprovalsCard } from '../components/ApprovalsCard/ApprovalsCard';
import { ApplicantsCard } from '../components/ApplicantsCard/ApplicantsCard';

import { MapRU } from '../common/mapRU';
import callApi from 'common/callApi';
import SkeletonWrapper from 'components/SkeletonWrapper/SkeletonWrapper';

export const Home = () => {
    const [data, setData] = useState({
        small_charts: {
            applications: null,
            average: null,
            approvals: null,
        },
        applications_approval: null,
        average_ege: null,
        applications_by_programs: null,
        applications_by_region: null,
        highballs: null,
        applicants: null,
        last_update: null,
        applicants_by_day: null,
    });

    const average = {
  "data": [
    {
      "label": 2018,
      "value": 72.02
    },
    {
      "label": 2019,
      "value": 73.63
    },
    {
      "label": 2020,
      "value": 74.44
    },
    {
      "label": 2021,
      "value": 73.27
    },
    {
      "label": 2022,
      "value": 74.59
    }
  ],
  "range": "2018-2022",
  "total": 74.59
}

    useEffect(() => {

        const getData = async () => {
            const response = await callApi('main_page');
            setData({
                ...response,
                applications_by_programs: response['applications_by_programs'].sort((a, b) => b.value - a.value)
            });
        };

        getData();
        const intervalId = setInterval(() => {


            getData();
        }, (1000 * 60 * 3 + 1000 * 60 * 15) * 60)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.content}>
            <Header refreshDate={data.last_update} />

            <div className={styles.statisticCards}>
                <SkeletonWrapper
                    size={180}
                    validationData={[data['small_charts']['applications']]}
                >
                    <ApplicationsCard
                        applications={data['small_charts']['applications']}
                        color='#05C985'
                    />
                </SkeletonWrapper>
                <SkeletonWrapper
                    size={180}
                    validationData={[data['small_charts']['applicants']]}
                >
                    <ApplicantsCard applicants={data['small_charts']['applicants']} />
                </SkeletonWrapper>
                <SkeletonWrapper
                    size={180}
                    validationData={[average]}
                >
                    <AverageBall
                        average={average}
                        color='#EE423D'
                    />
                </SkeletonWrapper>
                <SkeletonWrapper
                    size={180}
                    validationData={[data['small_charts']['approvals']]}
                >
                    <ApprovalsCard
                        approvals={data['small_charts']['approvals']}
                    />
                </SkeletonWrapper>
            </div>

            <div className={styles.historyList}>
                <h2>График заявлений и согласий</h2>
                <SkeletonWrapper
                    size={300}
                    validationData={[data['applications_approval']]}
                >
                    <SliderPlot data={data['applications_approval']} />
                </SkeletonWrapper>
            </div>

            <div className={styles.historyList}>
                <h2>График абитуриентов</h2>
                <SkeletonWrapper
                    size={300}
                    validationData={[data['applicants_by_day']]}
                >
                    <SliderPlot data={data['applicants_by_day']} />
                </SkeletonWrapper>
            </div>

            <div className={styles.barCharts}>
                <div className={styles.barChart}>
                    <h2>Балл ЕГЭ по институтам / школам</h2>
                    <SkeletonWrapper
                        size={581}
                        validationData={[
                            data['average_ege'],
                            data['highballs'],
                        ]}
                    >
                        <ColumnChart average_ege={data['average_ege']} hignballs={data['highballs']} />
                    </SkeletonWrapper>
                </div>
                <div className={styles.columnChart}>
                    <h2 style={{ marginBottom: 60 }}>По направлениям</h2>

                    <SkeletonWrapper
                        size={628}
                        validationData={[data['applications_by_programs']]}
                    >
                        <BarChart data={data['applications_by_programs']} />
                    </SkeletonWrapper>
                </div>
            </div>

            <div className={styles.map}>
                <h2>География поступающих</h2>

                <SkeletonWrapper
                    size={628}
                    validationData={[data['applications_by_region']]}
                >
                    <MapRU data={data['applications_by_region']} />
                </SkeletonWrapper>
            </div>
        </div>
    );
};
