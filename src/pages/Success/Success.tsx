import { SuccessDivs, SuccessInfo, SuccessMain } from './styles'
import Ilustration from '../../assets/Illustration.svg'
import { InforAdressComponent } from './components/InforAdressComponet'

export function Success() {
  return (
    <SuccessMain>
      <SuccessDivs>
        <SuccessInfo>
          <h1>Uh1! Pedido Confirmado</h1>
          <h3>Agora é só aguardar que logo o café chegará até você</h3>
        </SuccessInfo>
        <InforAdressComponent />
      </SuccessDivs>
      <img src={Ilustration} alt="" />
    </SuccessMain>
  )
}
