import {
  changerValueFilterSelect,
  readSchoolRequest,
} from 'src/store/modules/filter/actions'

import { useDispatch, useSelector } from 'react-redux'

import { EstadosCustomSelect } from 'src/components'

export const SelectCity = () => {
  const cidades = useSelector((state: any) => state.filters.city)

  const { cidade, estado } = useSelector(
    (state: any) => state.filters.filterSelect,
  )

  const dispatch = useDispatch()

  return (
    <EstadosCustomSelect
      label="Cidade"
      name="city"
      options={cidades}
      onChange={e => {
        dispatch(
          changerValueFilterSelect({ name: 'cidade', value: e.target.value }),
        )
        dispatch(readSchoolRequest({ cidade: e.target.value, uf: estado }))
      }}
    />
  )
}
