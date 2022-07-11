import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { customTheme, lightTheme, darkTheme } from 'themes'

interface Props extends AppProps {
  theme: string
}

function MyApp({ Component, pageProps, theme }: Props) {
  const currentTheme: Theme = theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// With this function we deactivate SSG
MyApp.getInitialProps = async (appContext: AppContext) => {
  const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' }
  const validThemes = ['light', 'dark', 'custom']

  return {
    theme: validThemes.includes(theme) ? theme : 'dark',
  }
}
export default MyApp
