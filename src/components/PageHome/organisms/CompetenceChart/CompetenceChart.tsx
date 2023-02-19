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
import { useHookConjuntoHabilidadesPorCompetencia } from 'src/hooks/useHookConjuntoHabilidadesPorCompetencia'
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
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Redação',
      },
    },
    ChartDataLabels,
  ],
}

const labels = [
  'Competencia 1',
  'Competencia 2',
  'Competencia 3',
  'Competencia 4',
  'Competencia 5',
  'Competencia 6',
  'Competencia 7',
  'Competencia 8',
  'Competencia 9',
]

export function CompetenceChart() {
  const { conjuntoHabilidadeCompetencia } =
    useHookConjuntoHabilidadesPorCompetencia()

  const data = {
    labels,
    datasets: [
      {
        label: 'Conjunto de habilidades por competencia',
        data: conjuntoHabilidadeCompetencia,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return <Bar options={options} data={data} />
}
