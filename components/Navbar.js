import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react';

export default class Navbar extends React.Component {
    render(){
        return(
            <div className={styles.navbar}>
                <h1 className={styles.title}>
                <Link href='/'>🍄 The Shroom Cloud 🍄</Link>
                </h1>
                <ul className={styles.nav}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/database">Database</Link></li>
                    {/* <li><Link href="/about">About</Link></li> */}
                </ul>
            </div>
        )
    }
}