import { Container } from "@material-ui/core";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { actionfetchallentries } from "./actioncreators/entries";

function App() {
  const[currentID,setCurrentID]=useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionfetchallentries());
  }, [dispatch,currentID]);
  return (
    <Container maxwidth="lg">
      <Navbar />
      <Home currentID={currentID} setCurrentID={setCurrentID}/>
    </Container>
  );
}

export default App;
