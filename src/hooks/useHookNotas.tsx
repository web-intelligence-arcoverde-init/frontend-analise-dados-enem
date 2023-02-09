import { useEffect, useState } from 'react'

export const useHookGabarito = () => {
  const [readacao, setRedacao] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let local = localStorage.getItem('data')

    if (local) {
      local = JSON.parse(local)
      getProvinces(local?.cod_inep)
    }
  }, [])

  const getProvinces = async (cod: any) => {
    const fetchData = await fetch(`http://127.0.0.1:3333/redacao/${cod}`)

    const parseData = await fetchData.json()
    setRedacao(parseData)
    setLoading(false)
  }

  return { readacao, loading }
}
