import Head from 'next/head'
import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css';

export default function Layout({children}){
    return (
    <div className={styles.container}>
        <Head>
          <title>The Shroom Cloud</title>
          <meta name="description" content="Global database of mushrooms." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
    );
}