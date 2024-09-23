import React from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import Stats from './stats/Stats';
import styles from './Dashboard.module.css';
import LineChart from './Charts/LineChart';

const Dashboard = () => {
  return (
    <CustomLayout header={<CustomPageTitle title='Dashboard' />}>
      <main className={styles.dashboardWrapper}>
        <Stats />
        <div>
          <div>
            <LineChart />
          </div>
        </div>
      </main>
    </CustomLayout>
  );
};

export default Dashboard;
