import { GetServerSideProps } from 'next';
import Head from 'next/head'
import React, { ReactElement, Suspense } from 'react';
import { NextPageWithLayout } from './_app';
import { MainLayout } from '@/components/layout';

const Demo: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Test</title>
                <meta name="description" content="Test abc" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>Test xyz</h1>
                <p>Lorem iiiiip</p>
            </div>
        </>
    );
};

Demo.Layout = MainLayout;

export default Demo;

export const getServerSideProps: GetServerSideProps = async (context) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000);
    })
    return {
        props: {}
    };
}