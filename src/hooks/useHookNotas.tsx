import { useEffect, useState } from 'react'

export const useHookGabarito = () => {
  const [readacao, setRedacao] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProvinces()
  }, [])

  const getProvinces = async () => {
    const fetchData = await fetch('http://127.0.0.1:3333/gabarito')

    const parseData = await fetchData.json()
    setRedacao(parseData.dataRedacoes)
    setLoading(false)
  }

  return { readacao, loading }
}
