import { useEffect, useState } from 'react'

export const useHookHightSkills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    let local = localStorage.getItem('data')

    if (local) {
      local = JSON.parse(local)
      console.log(local)
      getSkills(local)
    }
  }, [])

  const getSkills = async (escola: any) => {
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
      `http://127.0.0.1:3333/melhores-habilidades-por-materia`,
      requestOptions,
    )
    const parseData = await fetchData.json()
    setSkills(parseData)
  }

  return { skills }
}
