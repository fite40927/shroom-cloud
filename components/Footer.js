import React from "react";
import styles from '../styles/Home.module.css'

export default class Footer extends React.Component {
    render(){
        return(
            <footer className={styles.footer}>
                Created by Apsara Fite
            </footer>
        );
    }
}