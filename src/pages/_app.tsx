import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MobileContainer from '../layout/MobileContainer'
import { Provider } from 'react-redux'
import store from '../store/FoodStore'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MobileContainer>
        <Component {...pageProps} />
      </MobileContainer>
    </Provider>
  )
}

export default MyApp
