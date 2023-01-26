export const getProvinces = async () => {
    const fetchData = await fetch('http://www.geonames.org/childrenJSON?geonameId=3469034')

    const parseData = await fetchData.json()
    const filtered = parseData.geonames.map(geoName => {
        return {
            value: geoName.toponymName
        }
    })

    return filtered
}


// tem api?
// export const getCities = async () => {
//     const fetchData = await fetch('http://www.geonames.org/childrenJSON?geonameId=3469034')

//     const parseData = await fetchData.json()
//     const filtered = parseData.geonames.map(geoName => {
//         return {
//             value: geoName.toponymName
//         }
//     })

//     return filtered
// }