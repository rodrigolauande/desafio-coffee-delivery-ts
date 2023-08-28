import { useCart } from '../../../../hooks/useCart'
import { CoffeeContainer, DetailsPay, SelectedCoffeesContainer } from './styles'
import { CupomNote } from './CupomNote'
import { CoffeeCardSelect } from './CoffeeCardSelect/CoffeeCardSelect'
export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <CoffeeContainer>
      <h1>Cafés selecionados</h1>
      <SelectedCoffeesContainer>
        <DetailsPay>
          {cartItems.map((item) => (
            <CoffeeCardSelect key={item.id} coffee={item} />
          ))}
        </DetailsPay>
        <CupomNote />
      </SelectedCoffeesContainer>
    </CoffeeContainer>
  )
}
