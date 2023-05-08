import Head from 'next/head';
function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                {' '}
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
