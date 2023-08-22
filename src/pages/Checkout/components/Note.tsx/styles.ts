import styled from 'styled-components'

export const ContainerNote = styled.div`
  width: 25rem;
  display: flex-column;
  justify-content: space-between;
  font-family: 'Roboto';
  line-height: 2rem;

  button {
    margin-top: 1rem;
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
export const ContainerItems = styled.div`
  margin-top: 1rem;
  width: 25rem;
  display: flex;
  justify-content: space-between;
`
