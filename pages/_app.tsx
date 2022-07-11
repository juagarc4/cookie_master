import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cookies from 'js-cookie'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { customTheme, lightTheme, darkTheme } from 'themes'

interface Props extends AppProps {
  theme: string
}

function MyApp({ Component, pageProps, theme = 'light' }: Props) {
  // The cookie ist not available here. Therefor the server renders "light" for CookieTheme
  // Once the page is rendered we get the cookie en CookieTheme is 'dark"
  // If it happens we will receive the following error on the browser's console
  // Warning: Prop `className` did not match. Server: ...

  const CookieTheme = Cookies.get('theme') || 'light'
  console.log(CookieTheme)
  const currentTheme: Theme = CookieTheme === 'light' ? lightTheme : CookieTheme === 'dark' ? darkTheme : customTheme
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
