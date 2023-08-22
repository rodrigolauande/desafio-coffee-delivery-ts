import CoffeeImagem from '../../assets/CoffeeImagem.svg'
import { Package, Coffee, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeList,
  HomeItems,
  HomerTitleContainer,
  ProductList,
} from './styles'
import { CoffeeCard } from '../../components/CoffeeCard/CoffeeCard'
import { coffees } from '../../data/coffees'

export function Home() {
  return (
    <HomerTitleContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <HomeItems>
          <span>{<ShoppingCart size={24} weight="fill" />}</span>
          <p>Compra simple e segura</p>
          <span>{<Package size={24} weight="fill" />}</span>
          <p>Embalagem mantem o café intacto</p>
          <span>{<Timer size={24} weight="fill" />}</span>
          <p>Entrega rápida e rastreada</p>
          <span>{<Coffee size={24} weight="fill" />}</span>
          <p>O café chega fresquinho até você</p>
        </HomeItems>
      </div>
      <img src={CoffeeImagem} alt="" />
      <CoffeeList>
        <h1>Nossos Cafés</h1>
        <ul>
          <li>TRACIONAL</li>
          <li>ESPECIAL</li>
          <li>COM LEITE</li>
          <li>ALCOÓLICO</li>
          <li>GELADO</li>
        </ul>
      </CoffeeList>
      <ProductList>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </ProductList>
    </HomerTitleContainer>
  )
}
