import React from "react";
import useStyles from "./Styles.js";
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";

import moment from "moment";
import {useDispatch} from 'react-redux'
import {actiondeletepost} from '../../../../actioncreators/entries'

function Entry({ent,setCurrentID }) {
  const classes = useStyles();
  console.log(ent);
  const dispatch=useDispatch()
  return (
    <Card className={classes.card} style={{ border: "2px solid black" }}>
      <div className={classes.overlay}>
        <Typography style={{ color: "black" }} variant="body2">
          {moment(ent.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "black" }} size="small" onClick={()=>setCurrentID(ent._id)}>
          <ScatterPlotIcon fontSize="medium"   />
          
        </Button>
      </div>
      <div className={classes.details}></div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {ent.title}
      </Typography>
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {ent.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() =>dispatch(actiondeletepost(ent._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Entry;
