import Document, {Main, NextScript, Head, Html} from 'next/document';
import {globalStyles} from '../lib/styles';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, minimal-ui"
                    />
                    <meta name="theme-color" content="#1D2758" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&family=Open+Sans:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                    <style dangerouslySetInnerHTML={{__html: globalStyles}} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
