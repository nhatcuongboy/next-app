import Layout from '@/components/layout';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Test: NextPageWithLayout = () => {
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

Test.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Test;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     return {
//         props: {}
//     };
// }