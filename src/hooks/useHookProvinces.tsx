import { useEffect, useState } from 'react'

export const useHookProvinces = () => {
  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    getProvinces()
  }, [])

  const getProvinces = async () => {
    const fetchData = await fetch('http://127.0.0.1:3333/uf')

    const parseData = await fetchData.json()

    let formatedResponse: any = []

    parseData.map((item: any) => {
      formatedResponse.push({ value: item.sg_uf_esc })
    })

    setProvinces(formatedResponse)
  }

  return { provinces }
}
