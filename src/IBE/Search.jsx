import React, { useState, useEffect, useRef } from "react";
import {
  Container, Button,
  Box, 
  Grid,
} from "@mui/material";
import { BoxHomePage } from "../Style";
import dayjs from "dayjs";
import DestinationCity from "./DestinationCity";
import OriginCity from "./OriginCity";
import FlightDates from "./FlightDates";
import PaxNumber from "./PaxNumber";
import Spinner from "../shared/Spinner";
//var date = dayjs().format();
import { flightSearch } from "./api/FightApi";

const Search = () => {

  const formRef = React.useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [IsLoading, setIsLoading] = useState(false);

  const [originCityCode, setOriginCityCode] = useState(null);
  const [destinationCityCode, setDestinationCityCode] = useState(null);
  const [returnJourney, setReturnJourney] = useState(true);
  const [travelClass, setTravelClass] = useState('ECONOMY');
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
  const [infants, setInfants] = useState(0);

  const [departureDate, setDepartureDate] = useState(dayjs().format());
  const [returnDate, setReturnDate] = useState(dayjs().add(1, "day").format());
  const [validForm, setValidForm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrMsg('')
    const data = new FormData(event.currentTarget);    
    //console.log({  firstname: data.get('firstName'),   email: data.get('email'),  password: data.get('password'), }); 

            try{
              setIsLoading(true);            
                const response = await flightSearch(originCityCode, destinationCityCode, dayjs(departureDate).format("YYYY-MM-DD"), dayjs(returnDate).format("YYYY-MM-DD"), travelClass,
                adults, child, infants, 5, 'FJD', 'true')
                              
              if (response.status === 200) {
                    console.log(JSON.stringify(response));
              }
     
              } catch (err) {       
                    if (!err?.response) {
                      setErrMsg('No Server Response' + err);
                    } else if (err.response?.status === 400) {
                        setErrMsg('Invalid data provided, update request data and re-submit');
                    } else if (err.response?.status === 401) {
                        setErrMsg('Unauthorized');
                    } else if (err.response?.status === 403) {
                        setErrMsg('Unauthorized, forbidden, no permission to add or update.');
                    } else if (err.response?.status === 404) {
                        setErrMsg('Not found, resource may not exist. '  + err.response?.status);
                    } else {
                        setErrMsg('Failed to fetch flight data !'+ err);
                    }
                errRef.current.focus();
            }
            finally {
              setIsLoading(false);
            }    
  };
  
  useEffect(() => {
    if(originCityCode?.length === 3 && destinationCityCode?.length === 3){
        setValidForm(true);
    }
}, [originCityCode, destinationCityCode])

  return (
    
    <Container component="main" maxWidth="sm">
     {( IsLoading) ? <Spinner Type = {1} /> : ''}     
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit} ref={formRef}>
        <Grid container spacing={{ md: 1 }}>
          <Grid item xs={12} md={6} sm={6}>
            <OriginCity setOriginCityCode={setOriginCityCode} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <DestinationCity setDestinationCityCode={setDestinationCityCode} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <FlightDates setDepartureDate={setDepartureDate} setReturnDate={setReturnDate} departureDate={departureDate}
            returnDate={returnDate} returnJourney={returnJourney}/> 
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <PaxNumber returnJourney={returnJourney} setReturnJourney={setReturnJourney}
            travelClass={travelClass} setTravelClass={setTravelClass}
            adults={adults} setAdults={setAdults} 
            child={child} setChild={setChild} 
            infants={infants} setInfants={setInfants}
            />
          </Grid>
          <Grid item xs={12}>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 , textTransform:'none'}}
              size='small' 
              textDecoration= 'none'
               onClick={() => formRef.current.reportValidity()}
               disabled ={!validForm  ? true : false}
            >
              Search Flight
            </Button>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default Search;
