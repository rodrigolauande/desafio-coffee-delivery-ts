import styled from 'styled-components'

export const FormAdreess = styled.div`
  width: 35rem;
  height: 13.5rem;

  margin-top: 2.5rem;

  input:nth-child(1) {
    border: transparent;
    border-radius: 4px;
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseLabel};
    width: 12.5rem;
    height: 2.62rem;
    padding: 1rem;

    font-family: 'Roboto';
    font-size: 14px;
  }

  input:nth-child(2) {
    border: transparent;
    border-radius: 4px;
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseLabel};
    width: 35rem;
    height: 2.62rem;
    padding: 1rem;
    margin-top: 1rem;

    font-family: 'Roboto';
    font-size: 14px;
  }
`

export const InfoComplemento = styled.div`
  display: flex;

  margin-top: 1rem;
  gap: 1rem;

  input:nth-child(1) {
    border: transparent;
    border-radius: 4px;
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseLabel};
    width: 12.5rem;
    height: 2.62rem;
    padding: 1rem;

    font-family: 'Roboto';
    font-size: 14px;
  }

  input:nth-child(2) {
    border: transparent;
    border-radius: 4px;
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseLabel};
    width: 30rem;
    height: 2.62rem;
    padding: 1rem;
    margin-top: 0;

    font-family: 'Roboto';
    font-size: 14px;
  }
`

export const InfoCidade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  gap: 1rem;
  input:nth-child(1) {
    border: transparent;
    border-radius: 4px;
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseLabel};
    width: 12.5rem;
    height: 2.62rem;
    padding: 1rem;

    font-family: 'Roboto';
    font-size: 14px;
  }

  input:nth-child(2) {
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseLabel};
    width: 17.25rem;
    height: 2.62rem;
    margin-top: 0;
    padding: 1rem;

    font-family: 'Roboto';
    font-size: 14px;
  }

  input:nth-child(3) {
    border: transparent;
    border-radius: 4px;
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseLabel};
    width: 3.75rem;
    height: 2.62rem;
    padding: 1rem;

    font-family: 'Roboto';
    font-size: 14px;
  }
`
