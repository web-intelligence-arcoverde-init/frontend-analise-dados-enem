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
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { readSkillsRequest } from 'src/store/modules/results/actions'

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
        text: 'Habilidade',
      },
    },
    ChartDataLabels,
  ],
}

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
]

export function SkillsChart() {
  const dispatch = useDispatch()
  const skills = useSelector((state: any) => state.results.skills)

  useEffect(() => {
    dispatch(readSkillsRequest())
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: 'Habilidades',
        data: skills,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        datalabels: {
          color: 'black',
          font: {
            weight: 'bolder',
            size: '13',
          },
        },
        fill: true,
      },
    ],
  }

  return (
    <>
      {
        //@ts-ignore
        <Bar options={options} data={data} />
      }
    </>
  )
}
