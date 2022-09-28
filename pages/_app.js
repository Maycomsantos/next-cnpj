import '../styles/globals.css'
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-XG878J0DS1`} />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XG878J0DS1', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <script 
            async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6613975280720158"
            crossOrigin="anonymous"
            data-checked-head="true"
            ></script>
            
            
            <Head>
                <title>Encontrar CNPJ!</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp