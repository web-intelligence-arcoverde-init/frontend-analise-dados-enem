import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readBestSkillsRequest } from 'src/store/modules/results/actions'

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
)

export const SkillsHighestPercentageSuccessesChart = () => {
  const dispatch = useDispatch()
  const { data, labels } = useSelector(
    (state: any) => state.results.hightSkills,
  )

  useEffect(() => {
    dispatch(readBestSkillsRequest())
  }, [])

  const dataChart = {
    labels,
    datasets: [
      {
        label: `acertos`,
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
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

  return <Doughnut data={dataChart} />
}
