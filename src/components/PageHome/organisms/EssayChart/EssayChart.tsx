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
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useHookGabarito } from 'src/hooks'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
)

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: [
    {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Redação',
      },
    },
    ChartDataLabels,
  ],
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

export function EssayChart() {
  const { readacao } = useHookGabarito()

  const data = {
    labels,
    datasets: [
      {
        label: 'Redação',
        data: readacao,
        backgroundColor: '#1BBF83',
        datalabels: {
          color: 'black',
          font: {
            weight: 'bolder',
            size: '13',
          },
        },
      },
    ],
  }

  return <Bar options={options} data={data} />
}
