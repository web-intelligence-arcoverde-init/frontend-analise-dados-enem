import { SelectInput } from 'src/components'
import { useHookProvinces } from 'src/hooks'

export const SelectProvice = ({ setEstado }: any) => {
  const { provinces } = useHookProvinces()

  return (
    <SelectInput
      label="Estado"
      name="province"
      options={provinces}
      onChange={e => {
        setEstado(e.target.value)
      }}
    />
  )
}
