export const getProvinces = async () => {
  const fetchData = await fetch('http://127.0.0.1:3333/uf')
  const arrayFormatedDefault = []

  const parseData = await fetchData.json()

  parseData.forEach(item => {
    arrayFormatedDefault.push({ value: item.sg_uf_esc.toUpperCase() })
  })

  return []
}
