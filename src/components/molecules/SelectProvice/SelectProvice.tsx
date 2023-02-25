import { useDispatch, useSelector } from 'react-redux'
import { EstadosCustomSelect } from 'src/components'

import {
  readCityRequest,
  changerValueFilterSelect,
} from 'src/store/modules/filter/actions'

export const SelectProvice = ({ setEstado }: any) => {
  const ano = useSelector((state: any) => state.filters.filterSelect.ano)

  const uf = useSelector((state: any) => state.filters.uf)

  const dispatch = useDispatch()

  return (
    <EstadosCustomSelect
      label="Estado"
      name="province"
      options={uf}
      onChange={e => {
        dispatch(
          changerValueFilterSelect({ name: 'estado', value: e.target.value }),
        )
        dispatch(readCityRequest({ ano: ano, uf: e.target.value }))
      }}
    />
  )
}
