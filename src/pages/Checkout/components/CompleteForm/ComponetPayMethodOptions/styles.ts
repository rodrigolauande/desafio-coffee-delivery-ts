import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  margin-top: -2rem;
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme.purpleLight};
    border-color: ${(props) => props.theme.purple};

    &:hover {
      background: ${(props) => props.theme.purpleLight};
    }
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.baseButton};
  transition: 0.4s;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }

  user-select: none;
`
