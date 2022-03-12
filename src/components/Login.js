import React from 'react';
import {Button , Card, Typography } from '@material-ui/core';
import google from '../icons/google.png';
import welcome from '../icons/welcome.png';
import { makeStyles } from '@material-ui/core/styles';

import './login.css';

const useStyles = makeStyles((theme) => ({
    loginTitle:{
        '@media (max-width:413px)': 
        {
            fontSize:"30px",
        },
        textTransform:"uppercase",
        fontWeight:600,
        textShadow:"1px 1px 1px rgba(20, 114, 202, 0.808)",

    },
    loginSubtitle:
    {
        paddingTop:"20px",
        paddingBottom:"20px",
        color:"gray",
    }
  

  }));



const Login = ({signIn}) => 
{
    const classes = useStyles();
    const EventChange = () =>
    {
        signIn();
    }
    return (
        <Card className="login__container">
            <img src={welcome} className="welcome__img"/>
            <Typography variant="h3"  className={classes.loginTitle}>In Note App</Typography>
            <Typography variant="subtitle1" className={classes.loginSubtitle} >Here you can add important Notes,delete Notes.</Typography>
            <Button variant="contained" color="primary" onClick={EventChange}>
               <img src={google} alt="google icon" className="google__icon"/> LogIn With Google</Button>
        </Card>
    )
}

export default Login;