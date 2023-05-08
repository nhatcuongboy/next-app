import Router from 'next/router'
// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, Suspense, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Loader from "@/components/loader";
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { EmptyLayout } from '@/components/layout';
import { SWRConfig } from 'swr';
import axiosClient from '@/api-client/axios-client';

const clientSideEmotionCache = createEmotionCache();

export interface LayoutProps {
  children: ReactNode
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (props: LayoutProps) => ReactElement;
}

export type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const Layout = Component.Layout ?? EmptyLayout;
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


  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* {isLoading && <Loader />} */}
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}
