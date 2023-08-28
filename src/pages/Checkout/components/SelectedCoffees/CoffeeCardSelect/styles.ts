import styled from 'styled-components'

export const CoffeeCartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;

  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: solid 2px ${(props) => props.theme.baseButton};

  > div {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    max-width: 4.5rem;
    height: 100%;

    color: ${(props) => props.theme.baseText};
    gap: 0.5rem;
    height: 100%;
    border: none;
    background: ${(props) => props.theme.baseButton};
    padding: 0 0.5rem;
    border-radius: 6px;
    transition: 0.4s;
    font-family: 'Roboto';
    font-size: 14px;

    svg {
      color: ${(props) => props.theme.purple};
    }

    button {
      border: transparent;
      background: ${(props) => props.theme.baseButton};
      cursor: pointer;
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.baseText};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${(props) => props.theme.baseButton};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;
  font-family: 'Roboto';
  font-size: 10px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }
`
