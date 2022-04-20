import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale,
} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const data = {
  labels: ['00:00', '00:01'],
  datasets: [
    {
      id: 1,
      label: 'Glorious Model O',
      data: [0, 1],
    },
    {
      id: 2,
      label: 'G PRO Wireless',
      data: [1, 2],
    },
  ],
};

export default function LineChart() {
  return (
    <div style={{ background: '#fff' }}>
      <Chart type="line" options={options} data={data} />
    </div>
  );
}
