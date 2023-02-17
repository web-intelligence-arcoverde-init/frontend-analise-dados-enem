import React from 'react'

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
import { useHookBuscarMediaNotaRedacaoPorEscola } from 'src/hooks'

import styled from 'styled-components'
import { COLORS } from 'src/common'
import { useNavigate } from 'react-router'

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px;
  background-color: ${COLORS['green-100']};
  margin-bottom: 40px;
`

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
  const { mediaNotaRedacaoPorEscola, descricaoCompetenciaRedacao } =
    useHookBuscarMediaNotaRedacaoPorEscola()

  const navigation = useNavigate()

  const data = {
    labels,
    datasets: [
      {
        label: 'Media escolar da redação',
        data: mediaNotaRedacaoPorEscola,
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ width: '80%', height: '45vh' }}>
        <Button onClick={() => navigation('/')}>Voltar para inicio</Button>
        {
          //@ts-ignore
          <Bar options={options} data={data} />
        }
      </div>
      <div style={{ width: '80%', marginTop: '140px' }}>
        <h2 style={{ marginBottom: '10px' }}>Descrição dascompetencias</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {descricaoCompetenciaRedacao.map(
            (item: { desc_comp_redacao?: string }) => {
              return (
                <h4 style={{ lineHeight: '20px', marginBottom: '10px' }}>
                  # {item.desc_comp_redacao}
                </h4>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
