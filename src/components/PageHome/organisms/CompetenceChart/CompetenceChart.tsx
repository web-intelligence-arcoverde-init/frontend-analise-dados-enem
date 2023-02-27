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

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readCompetenceSkillRequest } from 'src/store/modules/results/actions'

export function CompetenceChart() {
  /*const { conjuntoHabilidadeCompetencia } =
    useHookConjuntoHabilidadesPorCompetencia()
  */

  const dispatch = useDispatch()

  const { competenceSkills } = useSelector((state: any) => state.results)

  useEffect(() => {
    dispatch(readCompetenceSkillRequest())
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: 'Conjunto de habilidades por competencia',
        data: competenceSkills,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return <Bar options={options} data={data} />
}
