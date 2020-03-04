import React from 'react';
import classes from './VideoCard.module.css';

const videoCard = (props) => {
    return(
        <div className={classes.wrap}>
            <img className={classes.image} src={props.thumbnail} alt="video thumbnail" />
            <h3 className={classes.title}>{props.title}</h3>
        </div>
    )
}


export default videoCard;