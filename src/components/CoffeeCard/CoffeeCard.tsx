import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { Card } from './styles'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
  quantity: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useCart()

  function handleAddCoffee() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    setQuantity((state) => state - 1)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <Card>
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
          <button disabled={quantity < 1} onClick={handleDecrement}>
            {<Minus size={14} weight="bold" />}
          </button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>
            {<Plus size={14} weight="bold" />}
          </button>
        </div>
        <button onClick={handleAddCoffee}>
          {<ShoppingCart size={22} weight="fill" />}
        </button>
      </footer>
    </Card>
  )
}
