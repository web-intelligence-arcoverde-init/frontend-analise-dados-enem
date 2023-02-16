import { useEffect, useState } from 'react'

export const useHookConjuntoHabilidadesPorCompetencia = () => {
  const [readacao, setRedacao] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let local = localStorage.getItem('data')

    if (local) {
      local = JSON.parse(local)
      getProvinces(local)
    }
  }, [])

  const getProvinces = async (escola: any) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cod_inep: escola.cod_inep,
        materia: escola.tecnologia,
        ano: escola.ano,
      }),
    }

    const fetchData = await fetch(
      `http://127.0.0.1:3333/competence-skill`,
      requestOptions,
    )

    const parseData = await fetchData.json()
    setRedacao(parseData.questoes)
    setLoading(false)
  }

  return { readacao, loading }
}
