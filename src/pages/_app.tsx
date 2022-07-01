import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MobileContainer from '../layout/MobileContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileContainer>
      <Component {...pageProps} />
    </MobileContainer>
  )
}

export default MyApp
