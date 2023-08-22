import styled from 'styled-components'

export const FormComplete = styled.div`
  display: flex;
  flex-direction: flex;
  margin-top: 5rem;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight: bold;

    margin: x10rem y9rem;
    width: 28.33rem;
    height: 1.43rem;
  }
`
export const FormCoffee = styled.div`
  width: 40rem;
  height: 36rem;
`
export const CoffeeCard = styled.div`
  border: transparent;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  width: 39.9rem;

  padding: 2rem;

  background: ${(props) => props.theme.baseCard};
`

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px 6px 44px;
`
