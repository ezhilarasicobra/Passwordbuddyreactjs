import React from "react";
import Form from "../Form/Form";
import Entries from "../Home/Entries/Entries";

import { Container, Grid, Grow } from "@material-ui/core";
function Home({setCurrentID,currentID}) {
  
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={6} sm={6}>
            <Form setCurrentID={setCurrentID} currentID={currentID}/>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Entries setCurrentID={setCurrentID} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
