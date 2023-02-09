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

const labels = ['Acertos', 'Erros']

export function SkillChart({ filterData }: any) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Habilidade',
        data: filterData,
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
