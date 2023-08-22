import { CoffeeContainer, CoffeeCard, FormComplete, FormCoffee } from './styles'
import { SelectCoffee } from './components/CoffeeSelect/styled'
import { CoffeeSelectComponent } from './components/CoffeeSelect/CoffeeSelectComponent'
import { useCart } from '../../hooks/useCart'
import { FormPayComponent } from './components/FormPay/FormPayComponent'
import { FormAdressComponent } from './components/FormAdress/FormAdressComponent'
import { FormTitle } from './components/FormTitle/FormTitle'
import { NoteComponent } from './components/Note.tsx/NoteComponet'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmForm(data: ConfirmOrderFormData) {
    console.log(data)
  }

  const { cartItems } = useCart()

  return (
    <FormProvider {...confirmOrderForm}>
      <FormComplete onSubmit={handleSubmit(handleConfirmForm)}>
        <FormCoffee>
          <h1>Complete seu pedido</h1>
          <CoffeeCard>
            <FormTitle />
            <FormAdressComponent />
          </CoffeeCard>
          <FormPayComponent />
        </FormCoffee>

        <SelectCoffee>
          <h1>Café selecionados</h1>
          <CoffeeContainer>
            {cartItems.map((item) => (
              <CoffeeSelectComponent key={item.id} coffee={item} />
            ))}
            <NoteComponent />
          </CoffeeContainer>
        </SelectCoffee>
      </FormComplete>
    </FormProvider>
  )
}
