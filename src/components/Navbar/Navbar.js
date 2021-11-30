import React, { useState } from "react";
import {AppBar, Typography} from '@material-ui/core'
import diary from "../../images/diary.jpg";
import useStyles from './styles.js'

function Navbar() {
  const classes=useStyles()
  return (
    <AppBar className={classes.appbar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">Password Buddyyyyy</Typography>
      
    </AppBar>
  );
}

export default Navbar;
