import React from "react";
import styles from '../styles/Home.module.css';
import icon from '../public/mushroom-header.jpg';
import Image from "next/image";
import Link from "next/link";

export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={data:props.data, href:props.href}
    }
    render(){
        return (
            <Link href={this.state.href}>
                <div className={styles.card}>
                    <div className={styles.cardimg} >
                        <img src={this.state.data.image}/>
                    </div>
                    <b>{this.state.data.common}</b>
                </div>
            </Link>
        )
    }
}