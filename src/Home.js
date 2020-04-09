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

        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column" alignItems="center" width={0.25} mt={2}>
            <Box mt={1} border={1} borderColor="red" borderRadius={5}
                 display="flex"
                 flexDirection="row"
                 justifyContent="center"
                 alignItems="center"
                 overflow="hidden">
              <img src="images/beatles_anthology_box.webp"
                   alt="beatles"/>
            </Box>

            <Box mt={2}>
              <Button variant="contained" color="secondary" onClick={onOpenClick}>
                {open ? "Close" : "Open"}
              </Button>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" width={0.75} px={1} mt={2}>
            <Typography variant="h4">Cry For A Shadow</Typography>
            <Box textAlign="justify" mt={2} onContextMenu={onSelect}
                 color={context ? "red" : "black"}>
              <Typography component="div">
                <Box lineHeight={1.8}>
                  {content}
                </Box>
              </Typography>
            </Box>
          </Box>

        </Box>
      </Grid>
    </Grid>
  )
}
export default Home;