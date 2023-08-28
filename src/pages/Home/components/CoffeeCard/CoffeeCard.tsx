import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeCardContainer } from './styles'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

export interface Coffee {
  quantity: number
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={`src/assets/coffees/${coffee.photo}`} alt="" />
      <ul>
        {coffee.tags.map((tag) => (
          <li key={`${coffee.id}${tag}`}>{tag}</li>
        ))}
      </ul>
      <span>{coffee.name}</span>
      <p>{coffee.description}</p>
      <footer>
        <h1>
          <span>R$</span>
          {formattedPrice}
        </h1>
        <div>
          <button disabled={quantity < 1} onClick={handleDecrease}>
            {<Minus size={14} weight="bold" />}
          </button>
          <p>{quantity}</p>
          <button onClick={handleIncrease}>
            {<Plus size={14} weight="bold" />}
          </button>
        </div>
        <button onClick={handleAddToCart}>
          {<ShoppingCart size={22} weight="fill" />}
        </button>
      </footer>
    </CoffeeCardContainer>
  )
}
