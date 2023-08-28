import LogoCoffee from '../assets/LogoCoffee.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { useCart } from '../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div>
        <NavLink to={'/'} title={'Home'}>
          <img src={LogoCoffee} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={24} weight="fill" /> São Paulo, SP
          </HeaderButton>
          <NavLink to="/checkout" title="Cart">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={24} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
