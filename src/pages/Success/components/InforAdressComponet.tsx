import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Information } from './styles'
import { OrderData } from '../../Checkout/Checkout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { paymentMethods } from '../../Checkout/components/CompleteForm/PayOptions'

export function InforAdressComponent() {
  interface LocationType {
    state: OrderData
  }

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>
  return (
    <Information>
      <span>{<MapPin size={24} weight="fill" />}</span>
      <p>
        Entrega em <strong>{state.street}</strong>, {state.number}
        <br />
        {state.district} - {state.city}, {state.uf}
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
        Pagamento na entrega{' '}
        <strong>{paymentMethods[state.paymentMethod].label}</strong>
      </p>
    </Information>
  )
}
