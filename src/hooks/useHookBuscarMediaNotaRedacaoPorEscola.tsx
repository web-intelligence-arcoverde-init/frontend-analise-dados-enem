import { useEffect, useState } from 'react'

const redacaoUrl = 'http://127.0.0.1:3333/media-redacao-escola'

export const useHookBuscarMediaNotaRedacaoPorEscola = () => {
  const [mediaNotaRedacaoPorEscola, setMediaNotaRedacaoPorEscola] = useState([])
  const [descricaoCompetenciaRedacao, setDescricaoCompetenciaRedacao] =
    useState([])

  useEffect(() => {
    let escolaSelecionada = localStorage.getItem('data')

    if (escolaSelecionada) {
      escolaSelecionada = JSON.parse(escolaSelecionada)
      buscarMediaNotaRedacaoPorEscola(escolaSelecionada)
    }
  }, [])

  const buscarMediaNotaRedacaoPorEscola = async (escolaSelecionada: any) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cod_inep: escolaSelecionada.cod_inep,
        ano: escolaSelecionada.ano,
      }),
    }

    const fetchData = await fetch(redacaoUrl, requestOptions)

    const parseData = await fetchData.json()
    setMediaNotaRedacaoPorEscola(parseData.data)
    setDescricaoCompetenciaRedacao(parseData.descricaoComposicao)
  }

  return { mediaNotaRedacaoPorEscola, descricaoCompetenciaRedacao }
}
