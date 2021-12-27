import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import Post from '../components/Post';
import React from 'react';

class Database extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:[],cards:[]};
    }
    componentDidMount(){
        this.fetchData();
        setInterval( () => {
            this.fetchData();
        }, 15*1000);
    }
    componentDidUpdate(prevProps,prevState){
        console.log(Date().toLocaleString());
        console.log(this.state.data);

        var a = JSON.stringify(this.state.data);
        var b = JSON.stringify(prevState.data);
        if(a !== b){
            this.createCards();
        }
    }
    fetchData(){
        fetch('http://localhost:4000/read')
            .then(response => response.json())
            .then(json => {
                if(Object.keys(json).length > 0){
                    this.setState({data:json});
                }
            })
            .catch(error => console.log(error));
        return this.state.data;
    }
    createCards(){
        // var arr = this.state.data.map((x) => {
        //     <Card key={x.key} name={x.common} href='https://www.google.com'/>
        // });
        var arr = [];
        var temp = this.state.data;
        for(var x in temp){
            arr.push(<Card key={x} data={temp[x]} href={'/database?name=' + temp[x].scientific.split(' ').join('_')}/>)
        }
        this.setState({cards:arr});
    }
    filterCards(){

    }
    render() {
        return (
            <div className={styles.grid}>
                {this.state.cards}
            </div>
        )
    }
}

import { useRouter } from 'next/router'

export default function routing() {
    const router = useRouter();
    const {name} = router.query;

    if(name){
        return (
            <Post name={name} />
        )
    }
    else {
        return <Database />
    }
}