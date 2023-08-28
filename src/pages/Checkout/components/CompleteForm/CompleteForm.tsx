import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormContainerComplete, Title, TitleForm } from './styles'
import { AddressForm } from './AddressForm'
import { PayOptions } from './PayOptions'

export function CompleteForm() {
  return (
    <FormContainerComplete>
      <h1>Complete seu pedido</h1>
      <Title>
        <TitleForm>
          <span>{<MapPinLine size={22} />}</span>
          <div>
            <h1>Endereço de entrega</h1>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </TitleForm>
        <AddressForm />
      </Title>
      <Title>
        <TitleForm>
          <span>{<CurrencyDollar size={22} className="currency" />}</span>
          <div>
            <h1>Pagameto</h1>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </TitleForm>
        <PayOptions />
      </Title>
    </FormContainerComplete>
  )
}
