import { ReactChild } from 'react'
import Head from 'next/head'

import { GlobalStyles } from '@theme/GlobalStyles'

import { LayoutWrap } from './elements'

interface Props {
  children: ReactChild | ReactChild[]
}

export const MainLayout = ({ children }: Props) => {
  return (
    <LayoutWrap>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap&subset=cyrillic-ext"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      {children}
    </LayoutWrap>
  )
}
