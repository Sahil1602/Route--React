import React from 'react';
import classes from './TopBar.module.css'
import { Link } from 'react-router-dom'

const topBar =()=> {
    return(
        <div className={classes.topBar}>
            <Link className= { classes.menuBar } to='/'>Home</Link>
            <Link className= { classes.menuBar } to='/contact'>Contact</Link>
            <Link className= { classes.menuBar } to='/about'>About</Link>
        </div>
    )
}

export default topBar;