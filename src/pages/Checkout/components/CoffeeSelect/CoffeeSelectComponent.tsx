import { coffees } from '../../../../data/coffees'
import { CoffeeSelect, CountCoffee, DescOption, RemoveCoffee } from './styled'
import { Minus, Plus, Trash } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: coffees
}

export function CoffeeSelectComponent({ coffee }: CoffeeCartCardProps) {
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
    <CoffeeSelect>
      <img src={`src/assets/coffees/${coffee.photo}`} alt="" />
      <DescOption>
        <p>{coffee.name}</p>
        <CountCoffee>
          <button onClick={handleDecrease}>{<Minus size={14} />}</button>
          <p>{coffee.quantity}</p>
          <button onClick={handleIncrease}>{<Plus size={14} />}</button>
        </CountCoffee>
        <RemoveCoffee>
          <button onClick={handleRemove}>
            <span>{<Trash size={14} />}</span>Remover
          </button>
        </RemoveCoffee>
      </DescOption>
      <span>{formattedPrice}</span>
    </CoffeeSelect>
  )
}
