import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight: bold;

    margin: x10rem y9rem;
    width: 28.33rem;
    height: 1.43rem;
  }
`

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 33rem;
  border-radius: 6px 44px 6px 44px;
  padding: 1.5rem;
  background: ${(props) => props.theme.baseCard};

  h1 {
    font-family: 'Roboto';
    font-size: 16px;

    width: 20rem;
    height: 1.43rem;
  }
`

export const DetailsPay = styled.div`
  display: flex;
  flex-direction: column;
  width: 31.5rem;
  padding: 0.5rem;
`

export const NoteSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 31rem;
  font-family: 'Roboto';
  font-size: 16px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    margin-top: 1rem;
    margin-left: 2.5rem;
    margin-bottom: 2rem;
    width: 25rem;
    height: 2.5rem;
    color: ${(props) => props.theme.background};
    background: ${(props) => props.theme.yellow};
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`
