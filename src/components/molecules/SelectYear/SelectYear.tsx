import { SelectInput } from 'src/components'

import { useEffect, useState } from 'react'

export const SelectYear = ({ setAno }: any) => {
  const [anos, setAnos] = useState([])

  useEffect(() => {
    getAnos()
  }, [])

  const getAnos = async () => {
    const fetchData = await fetch('http://127.0.0.1:3333/anos')

    const parseData = await fetchData.json()

    let formatedResponse: any = []

    parseData.map((item: any) => {
      formatedResponse.push({ value: item.nu_ano })
    })

    setAnos(formatedResponse)
  }

  return (
    <SelectInput
      label="Ano"
      name="city"
      options={anos}
      onChange={e => {
        setAno(e.target.value)
      }}
    />
  )
}
