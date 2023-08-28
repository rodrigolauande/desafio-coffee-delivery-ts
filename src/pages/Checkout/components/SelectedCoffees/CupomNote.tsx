import { NoteSectionContainer } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

const DELIVERY_PRICE = 3.5

export function CupomNote() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <NoteSectionContainer>
      <div>
        <p>Total de itens</p>
        <p>R$ {formattedItemsTotal}</p>
      </div>
      <div>
        <p>Entrega</p>
        <p>R$ {formattedDeliveryPrice}</p>
      </div>
      <div>
        <p>
          <strong>Total</strong>
        </p>
        <p>
          <strong>R$ {formattedCartTotal}</strong>
        </p>
      </div>

      <button disabled={cartQuantity <= 0} type="submit">
        Confirmar Pedido
      </button>
    </NoteSectionContainer>
  )
}
