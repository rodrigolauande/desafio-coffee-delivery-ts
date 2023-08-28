import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItem } from '../../../../../context/CardContext'
import { ActionsContainer, CoffeeCartContainer, RemoveButton } from './styles'
import { useCart } from '../../../../../hooks/useCart'
import { formatMoney } from '../../../../../utils/formatMoney'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCardSelect({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCartContainer>
      <div>
        <img src={`src/assets/coffees/${coffee.photo}`} alt="" />
        <div>
          <h1>{coffee.name}</h1>
          <ActionsContainer>
            <div>
              <button disabled={coffee.quantity <= 1}>
                {<Minus size={14} weight="bold" onClick={handleDecrease} />}
              </button>
              <p>{coffee.quantity}</p>
              <button>
                {<Plus size={14} weight="bold" onClick={handleIncrease} />}
              </button>
            </div>
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
        <p>R$ {formattedPrice}</p>
      </div>
    </CoffeeCartContainer>
  )
}
