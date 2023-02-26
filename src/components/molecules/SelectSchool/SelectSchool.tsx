import { CustomSelect } from 'src/components'

import { changerValueFilterSelect } from 'src/store/modules/filter/actions'
import { useDispatch, useSelector } from 'react-redux'

export const SelectSchool = () => {
  const dispatch = useDispatch()

  const escolas = useSelector((state: any) => state.filters.school)

  return (
    <CustomSelect
      label="Escola"
      name="school"
      options={escolas}
      onChange={e => {
        dispatch(
          changerValueFilterSelect({ name: 'escola', value: e.target.value }),
        )
      }}
    />
  )
}
