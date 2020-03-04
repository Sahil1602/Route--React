import React from 'react';
import classes from './Loading.module.css';

const loadIcon =()=>{
    return(
        <div className={classes.iconWrap}>
            <i id={classes.spinner} class="fas fa-spinner"></i><span>loading.....</span>
        </div>
    )
}

export default loadIcon;
