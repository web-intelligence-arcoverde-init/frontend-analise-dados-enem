import { useEffect, useState } from 'react'

export const useHookProvinces = () => {
  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    getProvinces()
  }, [])

  const getProvinces = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ano: '2019',
      }),
    }

    const fetchData = await fetch(
      '18.228.9.148:3333/api/v1/estados',
      requestOptions,
    )

    const parseData = await fetchData.json()

    setProvinces(parseData)
  }

  return { provinces }
}
