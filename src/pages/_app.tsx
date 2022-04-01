import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from '@store/index'
import { theme } from '@theme/index'
import { MainLayout } from '@components/../layouts/MainLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
