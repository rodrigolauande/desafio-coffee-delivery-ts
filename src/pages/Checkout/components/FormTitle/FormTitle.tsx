import { MapPinLine } from 'phosphor-react'
import { TitleForm } from './styles'

export function FormTitle() {
  return (
    <TitleForm>
      <span>{<MapPinLine size={22} />}</span>
      <div>
        <h1>Endereço de entrega</h1>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </div>
    </TitleForm>
  )
}
