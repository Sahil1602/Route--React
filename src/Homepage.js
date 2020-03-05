import React from 'react';
import Spinner from './Loading';
import axios from 'axios';
import VCardsComponent from './VideoCard'
import classes from './HomePage.module.css'
class home extends React.Component{
    state = {
        videoLists: [],
        showLoader: true
    } 
    
    componentDidMount(){
        axios.get(`http://5d76bf96515d1a0014085cf9.mockapi.io/playlist/`)
        .then((response) =>{
            console.log(response.data)
            this.setState({videoLists: [...response.data], showLoader: false})
        }).catch((err) => {
            console.log('fail', err)
        })
    }
    render(){
        const videoCards = this.state.videoLists.map(card => {
            return <VCardsComponent key={card.id} title={card.title} id={card.id} thumbnail={card.thumbnail} /> 
        })
        return(
            <div className={classes.videoCards}>
                {this.state.showLoader ? <Spinner /> : videoCards}
            </div>
        )
    }
}

export default home;