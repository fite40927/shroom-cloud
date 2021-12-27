import React from "react";
import styles from '../styles/Home.module.css';
import icon from '../public/mushroom-header.jpg';
import Image from "next/image";

export default class Post extends React.Component {
    constructor(props){
        super(props);
        this.state={name:props.name.split('_').join(' '), data:{}}
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        console.log(this.state.data);
        fetch('http://localhost:4000/read')
            .then(response => response.json())
            .then(json => {
                for(var x in json){
                    if(json[x].scientific === this.state.name){
                        this.setState({data:json[x]})
                        console.log(json[x]);
                    }
                }
            })
            .catch(error => console.log(error));
    }
    render(){
        return (
            <div>
                <h2>{this.state.data.common}</h2>
                <h4>{this.state.data.scientific}</h4>
                <Image src={icon} className={styles.icon}/>
                <p>{this.state.data.description}</p>
            </div>
        )
    }
}