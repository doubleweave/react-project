import React from 'react';
import logo from './logo.png';
import {
    withStyles,
    withWidth,
} from '@material-ui/core';

const styles = theme => ({
    container: {
        // border: '1px red solid',
        textAlign: 'center',
        // border: '1px solid red',
        marginTop: 5,
        marginBottom: 5,
    },
    img: {
        [theme.breakpoints.up('xs')]: {
            width: '50%',
            // border: '1px yellow solid',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '40%',
            // border: '1px red solid',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '30%',
            // border: '1px green solid',
        },
    },
});

function Logo({classes,width}) {
    console.log(width);
    return (
        <div className={classes.container}>
            <img src={logo} alt="logo" className={classes.img}/>
        </div>
    );
}

export default withWidth()(withStyles(styles)(Logo));
