import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import faker from 'faker'

import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels)

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: [{
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Redação',
    },
  }, ChartDataLabels],
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      datalabels: {
        color: 'black',
        font: {
          weight: 'bolder',
          size: '13'
        },
      },
      fill: true
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      datalabels: {
        color: 'black',
        font: {
          weight: 'bolder',
          size: '13'
        },
      },
      fill: true
    },
  ],
}

export function SkillsChart() {
  return <Bar options={options} data={data} />
}
