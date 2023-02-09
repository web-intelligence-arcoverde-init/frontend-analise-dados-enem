import { useEffect, useState } from 'react'

export const useHookSkillsById = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    getSkills()
  }, [])

  const getSkills = async () => {
    const fetchData = await fetch('http://127.0.0.1:3333/skill/26178699')

    const parseData = await fetchData.json()
    setSkills(parseData)
  }

  return { skills }
}
