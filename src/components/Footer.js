import React from 'react'
import {Container , Box,Grid,Typography,Divider} from "@material-ui/core"
import { Facebook , Twitter , Instagram, LinkedIn } from '@material-ui/icons'
import useStyles from './Styles'

const Footer = () => {
    const classes = useStyles();
  return (
    <footer className={classes.footer} >
    <Container className = {classes.container}>
    <Typography variant = "h4" color='inherit'>
    T-flex
    </Typography>
    <Facebook/>
    <Twitter/>
    <Divider/>
    </Container>
    </footer>
  )
}

export default Footer