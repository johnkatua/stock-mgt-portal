import React from 'react';
import StatCard from './StatCard';
import styles from './Stats.module.css';
import { BsGraphUp, BsCartCheck, BsCashStack, BsBoxSeam } from 'react-icons/bs';

const statItems = [
  {
    icon: <BsGraphUp />,
    title: 'Total Sales',
    amount: 3400,
  },
  {
    icon: <BsCartCheck />,
    title: 'Total Sales',
    amount: 3400,
  },
  {
    icon: <BsCashStack />,
    title: 'Total Expenses',
    amount: 2500,
  },
  {
    icon: <BsBoxSeam />,
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
