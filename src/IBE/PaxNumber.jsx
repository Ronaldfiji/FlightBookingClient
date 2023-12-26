import React from "react";
import {
  Grid,
  TextField,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  Stack,
} from "@mui/material";

const PaxNumber = ({
  returnJourney,
  setReturnJourney,
  travelClass,
  setTravelClass,
  adults,
  setAdults,
  child,
  setChild,
  infants,
  setInfants,
}) => {
  const handleChangeTravelClass = (event) => {
    setTravelClass(event.target.value);
  };

  const handleChangeJourneyType = (event) => {
    //setChecked(event.target.checked);
    setReturnJourney(event.target.checked);
  };
  //display: { xs: 'none', md: 'flex' } }}>
  return (
    <>
        <Typography mb={1.2} mt={1.2} variant="body2" gutterBottom>Flight details: </Typography>
      <Grid container spacing={2} >
      
        <Grid item xs={6} >
          <FormControl
            variant="standard"
            sx={{ marginLeft: 1, width: ["90%"], marginTop: { xs: 1, md: 0 } }}
          >
            <InputLabel id="demo-simple-select-standard-label" size="small">
              Journey
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={travelClass}
              onChange={handleChangeTravelClass}
              label="Age"
              size="small"
              
            >
              <MenuItem value={"ECONOMY"} >Economy</MenuItem>
              <MenuItem value={"BUSINESS"} >Business</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} container direction="column" justifyContent="center">
          <Stack
            direction="row"
            component="label"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption">One Way</Typography>
            <Switch
              // defaultChecked
              checked={returnJourney}
              onChange={handleChangeJourneyType}
              label="Label"
              size="small"
              color="warning"
            />
            <Typography variant="caption">Return</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}  >
          <Paper
            variant="outlined"
            sx={{ my: { xs: 1, md: 0 }, p: { xs: 1, md: 1 } }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  size="small"
                  required
                  id="noOfAdultId"
                  label="Adult"
                  fullWidth
                  autoComplete="cc-name"
                  variant="standard"
                  value={adults}
                  onChange={(e) => {
                    setAdults(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="noOfChildId"
                  size="small"
                  label="Child"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  value={child}
                  onChange={(e) => {
                    setChild(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="noOfInfantId"
                  size="small"
                  label="Infant"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                  value={infants}
                  onChange={(e) => {
                    setInfants(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>     
      </Grid>
    </>
  );
};

export default PaxNumber;
