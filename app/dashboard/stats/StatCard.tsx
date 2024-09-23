import { FC } from 'react';
import { StatCardItems } from '../../types/dashboard';

const StatCard: FC<StatCardItems> = ({ icon, title, amount }) => {
  return (
    <div>
      <div>{icon}</div>
      <div>{title}</div>
      <div>
        <span>Ksh.</span>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default StatCard;
