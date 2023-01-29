import { useEffect, useState } from 'react'

import { getProvinces } from 'src/services/utils/externalAPIs'

export const useHookProvinces = () => {
  const [provinces, setProvinces] = useState([])

  useEffect(() => {
    getProvinces().then(data => setProvinces(data))
  }, [])

  return { provinces }
}
