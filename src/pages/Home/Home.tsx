import { HomeContainer } from './styles'
import { Intro } from './components/intro/Intro'
import { Coffees } from './components/coffees/Coffees'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Coffees />
    </HomeContainer>
  )
}
