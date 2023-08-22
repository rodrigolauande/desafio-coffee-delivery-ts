import styled from 'styled-components'

export const SelectCoffee = styled.div``

export const CoffeeSelect = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 25rem;
  margin-top: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: solid 2px ${(props) => props.theme.baseButton};

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
  }
`
export const DescOption = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 0.5rem;

  width: 10rem;
  height: 3.81rem;

  font-family: 'Roboto';
  font-size: 16px;

  div {
    display: flex;
  }

  button {
    font-family: 'Roboto';
    font-size: 14px;
  }
`

export const CountCoffee = styled.div`
  border-radius: 6px;
  width: 4.5rem;
  height: 2rem;
  background: ${(props) => props.theme.baseButton};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-left: 0.5rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme.baseButton};
  }

  p {
    background: ${(props) => props.theme.baseButton};
    padding: 0.5rem;
    margin-left: 0.1rem;
    margin-right: -0.3rem;
  }
`
export const RemoveCoffee = styled.div`
  border-radius: 6px;
  width: 4.8rem;
  height: 2rem;
  background: ${(props) => props.theme.baseButton};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: none;
    background: transparent;
    background: ${(props) => props.theme.baseButton};
    padding: 0.5rem;
    gap: 0.5rem;
  }

  span {
    color: ${(props) => props.theme.purple};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
