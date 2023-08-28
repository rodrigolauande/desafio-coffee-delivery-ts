import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IntroItems, IntroContainer } from './styles'
import CoffeeImagem from '../../../../assets/CoffeeImagem.svg'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <IntroItems>
          <span>{<ShoppingCart size={24} weight="fill" />}</span>
          <p>Compra simple e segura</p>
          <span>{<Package size={24} weight="fill" />}</span>
          <p>Embalagem mantem o café intacto</p>
          <span>{<Timer size={24} weight="fill" />}</span>
          <p>Entrega rápida e rastreada</p>
          <span>{<Coffee size={24} weight="fill" />}</span>
          <p>O café chega fresquinho até você</p>
        </IntroItems>
      </div>
      <img src={CoffeeImagem} alt="" />
    </IntroContainer>
  )
}
