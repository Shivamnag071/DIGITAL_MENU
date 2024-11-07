import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider, extendTheme} from '@chakra-ui/react'

const colors = {
  green: {
    900:'#1C4532',
    800:'#22543D',
    500:'#38A169',
    100:'#C6F6D5',
    300:'#68D391'
  }
}

const fonts = {
  body: 'Tahoma',
  heading: 'Courier New'
} 

const theme = extendTheme({colors, fonts})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
    
  </React.StrictMode>,
)
