import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../components/CoffeeCard/CoffeeCard'
import { produce } from 'immer'

// export interface CartItem extends Coffee {
//   quantity: number
// }

interface CartContextType {
  cartItems: Coffee[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: Coffee) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContexProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Coffee[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: Coffee) {
    const coffeAlreadyExistxInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )
    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExistxInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeAlreadyExistxInCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
