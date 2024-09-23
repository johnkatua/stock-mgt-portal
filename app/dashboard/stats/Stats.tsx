import React from 'react';
import StatCard from './StatCard';
import styles from './Stats.module.css';

const statItems = [
  {
    icon: '1',
    title: 'Total Sales',
    amount: 3400,
  },
  {
    icon: '2',
    title: 'Total Expenses',
    amount: 2500,
  },
  {
    icon: '3',
    title: 'Total Products',
    amount: 400,
  },
];

const Stats = () => {
  return (
    <main className={styles.statsWrapper}>
      {statItems.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </main>
  );
};

export default Stats;
