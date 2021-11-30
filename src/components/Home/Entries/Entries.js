import React from "react";
import Entry from "../Entries/Entry/Entry";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./styles.js";
function Entries({setCurrentID,currentID}) {
  const classes = useStyles();
  const entries = useSelector((state) => state.entries);
  return !entries ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {entries.map((ent) => (
        <Grid item key={ent._id} xs={12} sm={6}>
          <Entry ent={ent} setCurrentID={setCurrentID}  />
        </Grid>
      ))}
    </Grid>
  );
}

export default Entries;
