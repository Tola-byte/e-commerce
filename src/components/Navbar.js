import React , {useState,useEffect}from 'react'
import {AppBar,IconButton,Toolbar,Typography,EndIcon, Button , Box , Link, useTheme , useMediaQuery} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import logo from './icon.png';
import useStyles from './Styles.js'
import DrawerComponent from './Drawer';
import ChangeContext from './HomePage'
const Navbar = () => {
 
  //const [click, setclick] = useState(false);
  

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
    <AppBar >
    <Toolbar className = {classes.app}> 
     <Typography variant="h5" className={classes.logo}>
        T-flex
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
    <div className = "flex justify-evenly">
     <Link to = "/Contact" color = "inherit" className={classes.link} style={{ textDecoration: 'none' }} >CONTACT US</Link>
     <Link to = "/About"  color = "inherit" className={classes.link} style={{ textDecoration: 'none' }} >ABOUT</Link>
    
     <Link to = "/Clothing"  style={{ textDecoration: 'none' }} color = "inherit" className={classes.link} >CLOTHING</Link>
     <Link to = "/Electronics" style={{ textDecoration: 'none' }} color = "inherit" className={classes.link} >ELECTRONICS</Link>
     <Link to =  "Gaming" style={{ textDecoration: 'none' }} color = "inherit" className={classes.link} >GAMING</Link>
     <Link to = "/Gadgets" color = "inherit"  style={{ textDecoration: 'none' }} className={classes.link}>GADGETS</Link>
    </div>
        )}
     <IconButton
     className = {classes.button}
     color="inherit"
     aria-label="menu"
   >
    <AddShoppingCart /> 
    <ChangeContext.Consumer>
    <p value = {add}></p>
    </ChangeContext.Consumer> 
    
   </IconButton>
      </Toolbar>
    
    </AppBar>
    </div> 
  )
}

export default Navbar