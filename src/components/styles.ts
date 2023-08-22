import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  width: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  height: 3rem;
  padding: 1rem;

  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;

  font-family: 'Roboto';
  font-size: 14px;

  span {
    border: solid 1px;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.yellowdark};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant }) => css`
    background: ${(props) => props.theme[`${variant}light`]};
    color: ${(props) => props.theme[variant]};

    span {
      background: ${(props) => props.theme[variant]};
    }
  `}

  ${({ variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${(props) => props.theme[variant]};
      }
    `}
`
