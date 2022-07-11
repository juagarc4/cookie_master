import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Cookies from 'js-cookie'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { customTheme, lightTheme, darkTheme } from 'themes'
import 'styles/globals.css'

interface Props extends AppProps {
  theme: string
}

function MyApp({ Component, pageProps, theme = 'light' }: Props) {
  const [currentTheme, setCurrenttTheme] = useState(lightTheme)

  // To fix the error 'Warning: Prop `className` did not match. Server:
  // we use an useEffect
  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme: Theme = cookieTheme === 'light' ? lightTheme : cookieTheme === 'dark' ? darkTheme : customTheme
    setCurrenttTheme(selectedTheme)
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
