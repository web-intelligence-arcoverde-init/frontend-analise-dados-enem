import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { EstadosCustomSelect } from 'src/components'
import {
  readEyarsRequest,
  changerValueFilterSelect,
  readUfRequest,
} from 'src/store/modules/filter/actions'

export const SelectYear = () => {
  const dispatch = useDispatch()

  const anos = useSelector((state: any) => state.filters.years)

  useEffect(() => {
    dispatch(readEyarsRequest())
  }, [])

  return (
    <EstadosCustomSelect
      label="Ano"
      name="city"
      options={anos}
      onChange={e => {
        dispatch(
          changerValueFilterSelect({ name: 'ano', value: e.target.value }),
        )
        dispatch(readUfRequest(e.target.value))
      }}
    />
  )
}
