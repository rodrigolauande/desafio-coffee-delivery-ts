import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  margin: auto 5rem;
  padding: 1.5rem;

  background: ${(props) => props.theme.background};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
