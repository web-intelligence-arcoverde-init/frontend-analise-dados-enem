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
      display: false,
    },
    title: {
      display: true,
      text: 'Redação',
    },
  }, ChartDataLabels],
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
}

const labels = [
  '1 Competência',
  '2 Competência',
  '3 Competência',
  '4 Competência',
  '5 Competência',
]

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#1BBF83',
      datalabels: {
        color: 'black',
        font: {
          weight: 'bolder',
          size: '13'
        },
      },
    },
  ],
}

export function EssayChart() {
  return <Bar options={options} data={data} />
}
