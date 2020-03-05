import React from 'react';
import classes from './VideoCard.module.css';
import { Link } from 'react-router-dom';

const videoCard = (props) => {
    return(
        <div className={classes.wrap}>
            <Link to={`/details/${props.id}`}>
                <img className={classes.image} src={props.thumbnail} alt="video thumbnail" />
                <h3 className={classes.title}>{props.title}</h3>
            </Link>
        </div>
    )
}


export default videoCard;