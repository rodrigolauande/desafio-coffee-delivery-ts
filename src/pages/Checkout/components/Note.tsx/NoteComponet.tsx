import { ContainerItems, ContainerNote } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

export function NoteComponent() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const DELIVERY_PRICE = 3.5

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ContainerNote>
      <ContainerItems>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>
          <strong>Total</strong>
        </div>
        <div>
          <p>R$ {formattedItemsTotal}</p>
          <p>R$ {formatDeliveryPrice}</p>
          <strong>R$ {formattedCartTotal}</strong>
        </div>
      </ContainerItems>
      <button disabled={cartQuantity <= 0} type="submit">
        Confirmar Pedido
      </button>
    </ContainerNote>
  )
}
