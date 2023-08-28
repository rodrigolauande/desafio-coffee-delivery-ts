import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard/CoffeeCard'
import { CoffeesContainer, ListCoffees } from './styles'

export function Coffees() {
  return (
    <CoffeesContainer>
      <h1>Nossos Cafés</h1>
      <ListCoffees>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </ListCoffees>
    </CoffeesContainer>
  )
}
