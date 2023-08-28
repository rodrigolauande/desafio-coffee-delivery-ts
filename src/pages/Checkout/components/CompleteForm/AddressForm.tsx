import { useFormContext } from 'react-hook-form'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  const { register } = useFormContext()
  return (
    <AddressFormContainer>
      <input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
      />
      <input placeholder="Rua" className="street" {...register('street')} />
      <input
        type="number"
        placeholder="Número"
        className="number"
        {...register('number')}
      />
      <input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
      />
      <input
        placeholder="Bairro"
        className="district"
        {...register('district')}
      />
      <input placeholder="Cidade" className="city" {...register('city')} />
      <input placeholder="UF" className="uf" {...register('uf')} />
    </AddressFormContainer>
  )
}
