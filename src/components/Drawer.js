import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText, 
  IconButton,
  Typography,
  Box
} from "@material-ui/core";
import {Menu , Call} from '@material-ui/icons';
import { Link } from "react-router-dom";
import { styled} from '@material-ui/core';
import useStyles from './Styles.js'

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer  open={openDrawer}
      onClose={() => setOpenDrawer(false)}>
      <Box>
      <Typography variant = "h4" color = "primary">
      Hello
      </Typography>
      </Box>
        <List className = {classes.drawers}>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link  className = {classes.drawer} to="/Contact"> <Typography color = "primary" variant = "h6">Contact Us </Typography></Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link  className = {classes.drawer} to="/about">
              <Typography color = "primary" variant = "h6" >About</Typography></Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link  className = {classes.drawer} to="/Clothing"><Typography color = "primary" variant = "h6" >Clothing </Typography></Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link  className = {classes.drawer} underline = "none" to="/Electronics"><Typography color = "primary" variant = "h6" >Electronics </Typography></Link>
            </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link  className = {classes.drawer} to="/Gaming"><Typography color = "primary" variant = "h6">Gaming</Typography></Link>
          </ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText>
          <Link  className = {classes.drawer} to="/Gadgets"><Typography color = "primary" variant = "h6">Gadgets</Typography></Link>
        </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton color = "inherit" onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
      </div>
  );
}
export default DrawerComponent;
