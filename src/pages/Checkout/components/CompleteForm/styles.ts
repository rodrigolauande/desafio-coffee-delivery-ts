import styled from 'styled-components'

export const FormContainerComplete = styled.div`
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

export const Title = styled.div`
  border: transparent;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  width: 37rem;

  padding: 2rem;

  background: ${(props) => props.theme.baseCard};
`

export const TitleForm = styled.div`
  display: flex;

  width: 35rem;
  height: 2.75rem;

  span {
    display: flex;
    padding: 0.5rem 0;

    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: end;

    color: ${(props) => props.theme.yellowdark};
  }

  span .currency {
    color: ${(props) => props.theme.purpledark};
  }

  div {
    display: flex;

    flex-wrap: wrap;
    width: 33.12rem;
    height: 1.31rem;

    margin: x1.87rem;

    font-family: 'Roboto';
    color: ${(props) => props.theme.baseText};
  }

  h1 {
    font-size: 16px;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: y1.43rem;
  }
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 11rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
    background: ${(props) => props.theme.baseInput};
    border-radius: 6px;
    border: transparent;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0.5rem;
  }

  .street {
    grid-column: span 3;
    background: ${(props) => props.theme.baseInput};
    border-radius: 6px;
    border: transparent;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0.5rem;
  }

  .number {
    background: ${(props) => props.theme.baseInput};
    border-radius: 6px;
    border: transparent;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0.5rem;
  }

  .complement {
    grid-column: span 2;
    background: ${(props) => props.theme.baseInput};
    border-radius: 6px;
    border: transparent;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0.5rem;
  }

  .district {
    background: ${(props) => props.theme.baseInput};
    border-radius: 6px;
    border: transparent;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0.5rem;
  }

  .city {
    background: ${(props) => props.theme.baseInput};
    border-radius: 6px;
    border: transparent;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0.5rem;
  }

  .uf {
    background: ${(props) => props.theme.baseInput};
    border-radius: 6px;
    border: transparent;
    font-family: 'Roboto';
    font-size: 14px;
    padding: 0.5rem;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 34rem;

  background: ${(props) => props.theme.baseCard};

  font-family: 'Roboto';

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    border-radius: 6px;
    width: 10rem;
    height: 3.18rem;
    background: ${(props) => props.theme.baseButton};
    color: ${(props) => props.theme.baseText};
  }
`
