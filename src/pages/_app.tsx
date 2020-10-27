import React from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'

const Page: NextPage<AppProps> = props => {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Component {...pageProps} />
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
    </React.Fragment>
  )
}

export default Page
