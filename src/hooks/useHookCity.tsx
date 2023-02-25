import { useEffect } from 'react'

export const useHookGetUf = () => {
  useEffect(() => {
    getProvinces()
  }, [])

  const getProvinces = async () => {
    const fetchData = await fetch('http://127.0.0.1:3333/escolas')
  }

  return {}
}
