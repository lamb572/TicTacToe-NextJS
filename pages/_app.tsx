import type { AppProps } from "next/app"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "../redux/store"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}

export default MyApp
