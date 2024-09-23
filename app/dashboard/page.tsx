import React from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import Stats from './stats/Stats';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <CustomLayout header={<CustomPageTitle title='Dashboard' />}>
      <main className={styles.dashboardWrapper}>
        <Stats />
        <div>
          <div>A</div>
          <div>B</div>
        </div>
        <div>
          <div>C</div>
          <div>D</div>
        </div>
        <div>
          <div>E</div>
          <div>F</div>
        </div>
      </main>
    </CustomLayout>
  );
};

export default Dashboard;
