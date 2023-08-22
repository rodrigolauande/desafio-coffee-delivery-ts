import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { CardPagamento, TitleCard } from './styles'

export function FormPayComponent() {
  return (
    <CardPagamento>
      <TitleCard>
        <span>{<CurrencyDollar size={22} />}</span>
        <div>
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleCard>
      <footer>
        <button>
          <span>{<CreditCard size={16} />}</span>Cartão de Crédito
        </button>
        <button>
          <span>{<Bank size={16} />}</span>Cartão de Débito
        </button>

        <button>
          <span>{<Money size={16} />}</span>Dinheiro
        </button>
      </footer>
    </CardPagamento>
  )
}
