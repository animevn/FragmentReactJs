import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {content} from "./Constants";
import {Radio} from "@material-ui/core";

function Home() {
  const width = {xs:11, sm:8, md:6, lg:4, xl:3};
  const innital = {option1:"Yes", option2:"No", option3:"None"};
  const [radio, setRadio] = useState(innital.option3);
  const [open, setOpen] = useState(false);
  const[context, setContext] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setRadio(value);
  }

  function onOpenClick(event) {
    event.preventDefault();
    setOpen(old=>!old);
  }

  function onSelect(event) {
    event.preventDefault();
    setContext(old=>!old);
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item {...width}>
        <Box flexDirection="row" justifyContent="space-evenly" alignItems="center"
             my={open ? 1 : 0} display={open ? "flex" : "none"}
             bgcolor="primary.main" borderRadius={3}>

          <Typography variant="h6">Do you like this?</Typography>

          <RadioGroup>
            <FormControlLabel control={
              <Radio value={innital.option1} checked={radio === innital.option1}
                     onChange={handleChange} />
            } label="Yes" />
          </RadioGroup>

          <RadioGroup>
            <FormControlLabel control={
              <Radio value={innital.option2} checked={radio === innital.option2}
                     onChange={handleChange} />
            } label="No" />
          </RadioGroup>
        </Box>

        <div className="row col-xl-7 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-3 px-0">
          <div className="d-flex flex-column w-25">
            <img className="img-thumbnail rounded-lg w-75 h-auto mt-2"
                 src="images/beatles_anthology_box.webp" alt="beatles"/>
            <button className="btn btn-outline-success mt-4 w-75" onClick={onOpenClick}>
              {open ? "Close" : "Open"}
            </button>
          </div>

          <div className="w-75">
            <div className="container pr-0">
              <h2>Cry For A Shadow</h2>
              <p className={"text-justify " + (context? "text-success" : "text-dark")}
                 onContextMenu={onSelect}>{content}</p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
export default Home;