import { FC, ReactElement } from 'react'
import Head from 'next/head'
import { Navbar } from 'components/ui'

interface Props {
  title?: string
  children?: ReactElement | ReactElement[]
}

export const Layout: FC<Props> = ({ title = 'CookieMaster', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  )
}
