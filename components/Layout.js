import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Script from 'next/script'
import firebaseApp from '../firebase';

export const siteTitle = 'Houseplant.app'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <link rel="manifest" href="/manifest.json" />
                {/* <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                /> */}
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB" />
                <link rel="icon" href="/sagwa.ico" />
                <meta
                    name="Identify your houseplants"
                    content="Use tools to take a photo and identify your houseplants"
                />
                <meta name="og:title" content={siteTitle} />

                {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
                <script
                    src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"
                />

                {/* <!-- TODO: Add SDKs for Firebase products that you want to use */}
                {/* https://firebase.google.com/docs/web/setup#available-libraries --> */}
                <script
                    src="https://www.gstatic.com/firebasejs/8.8.1/firebase-analytics.js"
                />
                
            </Head>

            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}