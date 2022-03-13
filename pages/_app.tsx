import { CacheProvider, EmotionCache } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "../redux/store"
import createEmotionCache from "../src/createEmotionCache"
import "../styles/globals.css"
import theme from "../styles/theme"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
