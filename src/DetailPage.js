import React from 'react';
import classes from './DetailPage.module.css';
import Axios from 'axios';

class detail extends React.Component{
    state={
        detailObj: {}
    }

    api = 'http://5d76bf96515d1a0014085cf9.mockapi.io/playlist/' + this.props.match.params.videoId;

    componentDidMount(){
        Axios.get(this.api)
        .then((response) =>{
            console.log(response.data)
            this.setState({detailObj: response.data})
        }).catch((err)=>{
            console.log('fail', err)
        })
    }

    render(){
        console.log(this.state.detailObj)
        return(
            <div className={classes.detail}>
                <h1>DETAILS: {this.props.match.params.videoId}</h1>
                <p>{this.state.detailObj.title}</p>

            </div>
        )
    }
}

export default detail;