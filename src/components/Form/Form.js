import { Button, Grid, Paper, TextareaAutosize, TextField, Typography } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import React, { useState,useEffect } from "react";
import Fab from '@material-ui/core/Fab';

import useStyles from "./Styles.js";
import { useDispatch } from "react-redux";
import { actioncreatenewentry,actionupdatepost } from "../../actioncreators/entries";
import {useSelector} from 'react-redux'
import { Room } from "@material-ui/icons";

function Form({currentID,setCurrentID}) {
  const entry=useSelector((state)=>currentID ? state.entries.find((en)=>en._id===currentID):null)
  const dispatch = useDispatch();
  const classes = useStyles();
  const [entryData, setEntryData] = useState({ title: "", message: "" });
  const handlesubmit = (e) => {
    e.preventDefault();

    if(currentID){
      dispatch(actionupdatepost(currentID,entryData))
      
    }else{
      dispatch(actioncreatenewentry(entryData));
     
    }
    clearhandle()
    
  };
  const clearhandle = () => {
    setCurrentID(null)
    setEntryData({ title: "", message: "" })
  };
  useEffect(()=>{
if(entry)setEntryData(entry)

  },[entry])
  return (
    <Paper className={classes.paper} style={{backgroundColor:"gray"}}>
      <Grid container className={classes.grid}  > 
      <Typography variant="h6">{currentID ? 'Edit':'Log'} Your Password</Typography>
      <Grid item xs={10}>
      <TextareaAutosize
      style={{color:"black"}}
      placeholder="Enter the Application Name"
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={entryData.title}
          onChange={(e) =>
            setEntryData({ ...entryData, title: e.target.value })
          }
        />

      </Grid>
      <Grid item >

      <TextareaAutosize

      placeholder="Enter Password  hint to be stored "
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={entryData.message}
          onChange={(e) =>
            setEntryData({ ...entryData, message: e.target.value })
          }
        />
      </Grid>
      
      </Grid>
       
        
        
        
       
       
            <Fab style={{color:"red"}}>
              <AddIcon onClick={handlesubmit} />
            </Fab>
            
   
    </Paper>
  );
}

export default Form;
