import Router from 'next/router'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, Suspense, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Loader from "@/components/loader";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false)
    });

  }, [Router]);


  return getLayout(
    <>
      {isLoading && <Loader />}
      <Component {...pageProps} />
    </>
  )
}
