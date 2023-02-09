import { SelectInput } from 'src/components'

import { useEffect, useState } from 'react'

export const SelectCity = ({ setCidade, estado }: any) => {
  const [cidades, setCidades] = useState([])

  useEffect(() => {
    getCidade()
  }, [estado])

  const getCidade = async () => {
    if (estado !== '') {
      const fetchData = await fetch(
        `http://127.0.0.1:3333/city/${estado.toUpperCase()}`,
      )

      const parseData = await fetchData.json()

      let formatedResponse: any = []

      parseData.map((item: any) => {
        formatedResponse.push({ value: item.municipio })
      })

      setCidades(formatedResponse)
    }
  }

  return (
    <SelectInput
      label="Cidade"
      name="city"
      options={cidades}
      onChange={e => {
        setCidade(e.target.value)
      }}
    />
  )
}
