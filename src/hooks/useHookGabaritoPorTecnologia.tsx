import { useEffect, useState } from 'react'

export const useHookGabaritoPorTecnologia = () => {
  const [gabaritoPorTecnologia, setGabaritoPorTecnologia] = useState([])

  useEffect(() => {
    let local = localStorage.getItem('data')

    if (local) {
      local = JSON.parse(local)
      buscarGabaritoPorTecnologia(local)
    }
  }, [])

  const buscarGabaritoPorTecnologia = async (escola: any) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        materia: escola.tecnologia,
        cod_inep: escola.cod_inep,
        ano: escola.ano,
      }),
    }

    const fetchData = await fetch(
      `http://127.0.0.1:3333/gabarito-tecnologia`,
      requestOptions,
    )
    const parseData = await fetchData.json()
    setGabaritoPorTecnologia(parseData)
  }

  return { gabaritoPorTecnologia }
}
