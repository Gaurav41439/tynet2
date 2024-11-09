import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ['Team', 'Staking', 'Advisors', 'Liquidity', 'Ecosystem', 'Marketing','Private Sale'],
  datasets: [
    {
      label: '# of Votes',
      data: [17, 21, 3, 5, 2, 3],
      backgroundColor: [
        '#AFC5FF',
        '#FDEBB3',
        '#ACF2C4',
        '#CDBDF3',
        '#E89F8E',
        '#6574EB',
        '#ACE5F2'
      ],
      borderColor: [
        '#AFC5FF',
        '#FDEBB3',
        '#ACF2C4',
        '#CDBDF3',
        '#E89F8E',
        '#6574EB',
        '#ACE5F2'
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Doughnut data={data} />;
}
