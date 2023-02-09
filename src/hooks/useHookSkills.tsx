import { useEffect, useState } from 'react'

export const useHookSkills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    getSkills()
  }, [])

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      materia: 'cn',
    }),
  }

  const getSkills = async () => {
    const fetchData = await fetch(
      'http://127.0.0.1:3333/gabarito/26024691',
      requestOptions,
    )
    const parseData = await fetchData.json()
    setSkills(parseData)
  }

  return { skills }
}
