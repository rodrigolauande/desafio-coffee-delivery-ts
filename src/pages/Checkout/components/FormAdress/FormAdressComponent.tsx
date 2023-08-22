import { useFormContext } from 'react-hook-form'
import { InfoCidade, InfoComplemento, FormAdreess } from './styles'

export function FormAdressComponent() {
  const { register } = useFormContext()

  return (
    <FormAdreess>
      <input type="text" placeholder="CEP" {...register('cep')} />
      <input type="text" placeholder="Rua" {...register('rua')} />
      <InfoComplemento>
        <input type="text" placeholder="Número" {...register('numero')} />
        <input
          type="text"
          placeholder="Complemento"
          {...register('complemento')}
        />
      </InfoComplemento>
      <InfoCidade>
        <input type="text" placeholder="Bairro" {...register('bairro')} />
        <input type="text" placeholder="Cidade" {...register('cidade')} />
        <input type="text" placeholder="UF" {...register('uf')} />
      </InfoCidade>
    </FormAdreess>
  )
}
