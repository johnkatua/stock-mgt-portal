'use client';

import { FC } from 'react';
import { StatCardItems } from '../../types/dashboard';
import { Typography } from 'antd';
import styles from './Stats.module.css';

const StatCard: FC<StatCardItems> = ({ icon, title, amount }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statCardIcon}>{icon}</div>
      <Typography.Title level={5}>{title}</Typography.Title>
      <Typography.Title level={4}>
        <span>Ksh.</span> <span>{amount}</span>
      </Typography.Title>
    </div>
  );
};

export default StatCard;
