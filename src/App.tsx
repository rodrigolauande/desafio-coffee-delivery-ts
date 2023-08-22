import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { CartContexProvider } from './context/CardContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContexProvider>
          <Router />
        </CartContexProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
