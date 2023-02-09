import { SelectInput } from 'src/components'

import { useEffect, useState } from 'react'

export const SelectSchool = ({ setEscola, cidade, ano }: any) => {
  const [escolas, setEscolas] = useState([])

  useEffect(() => {
    getEscolas()
  }, [cidade, ano])

  /*
  
  
   - Trocar para metodo post tanto no back quanto no front para manda as informações da cidade junto com o ano
   
  
  */

  const getEscolas = async () => {
    if (cidade !== '' && ano !== '') {
      const example = JSON.stringify(cidade)

      const fetchData = await fetch(
        `http://127.0.0.1:3333/escola/${example.toLowerCase().trim()}/${ano}`,
      )

      const parseData = await fetchData.json()

      let formatedResponse: any = []

      parseData.map((item: any) => {
        formatedResponse.push({ value: item.escola, cod_inep: item.cod_inep })
      })

      setEscolas(formatedResponse)
    }
  }

  return (
    <SelectInput
      label="Escola"
      name="school"
      options={escolas}
      onChange={e => {
        setEscola(e.target.value)
      }}
    />
  )
}
