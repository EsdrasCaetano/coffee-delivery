import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GloabalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Routes'
import { CartContextProvider } from './contexts/CartContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GloabalStyle />
      
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
