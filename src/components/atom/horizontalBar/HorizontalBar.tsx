import * as React from 'react';
import { HorizontalBar as HorizontalBarChart } from 'react-chartjs-2';

const HorizontalBar: React.SFC<{}> = () => {
 const data = {
   labels: ['24일', '25일', '26일', '27일', '28일', '29일', '30일'],
   datasets: [
     {
       label: '업무 시간',
       backgroundColor: '#ef9e9f',
       borderColor: '#ef9e9f',
       radius: 3,
       borderWidth: 1,
       hoverBackgroundColor: '#cb7575',
       hoverBorderColor: '#cb7575',
       data: [8, 8, 8, 8, 7, 8, 9]
     }
   ]
  };

  return (
    <div>
      <HorizontalBarChart
          data={data}
          // width={50}
          height={400}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  },
                }
              ]
            }
          }}
      />
    </div>
  );
};

export default HorizontalBar;
