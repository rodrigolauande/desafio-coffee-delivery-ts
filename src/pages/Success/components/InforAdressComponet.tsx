import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Information } from './styles'

export function InforAdressComponent() {
  return (
    <Information>
      <span>{<MapPin size={24} weight="fill" />}</span>
      <p>
        Entrega em <strong>Rua João Daniel Martinelli 102 </strong>
        Farrapos-Porto Alegre, RS
      </p>
      <span>{<Timer size={24} weight="fill" />}</span>
      <p>
        Previsão de entrega{' '}
        <p>
          <strong>20 min - 30 min</strong>
        </p>
      </p>
      <span>{<CurrencyDollar size={24} weight="fill" />}</span>
      <p>
        Pagamento na entrega <strong>Cartão de Crédito</strong>
      </p>
    </Information>
  )
}
