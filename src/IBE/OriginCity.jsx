import React, { Fragment, useEffect, useState , useRef} from "react";
import {  Container,  Typography,  Box,  TextField,  InputAdornment,  Grid} from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { citySearch } from "./api/FightApi";
import CircularProgress from "@mui/material/CircularProgress";
import {
  LocationOn as PinIcon,
  Search as MagnifierIcon,
} from "@mui/icons-material";



const OriginCity = ({setOriginCityCode}) => {
    const errRef = useRef();
    const [ErrMsg, setErrMsg] = useState('');
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setIsLoading] = useState(loadingInit);
    const [userInputValue, setUserInputValue] = useState("");
    const [cityCode, setCityCode] = useState(null);
 
    var loadingInit = open && options.length === 0;

    useEffect(() => {
      let active = true;
      setErrMsg("");
      (async () => {      
        open && userInputValue?.length > 0 ? setIsLoading(true) : setIsLoading(false);
        try{
                if (active && userInputValue.length >= 3) {
                      const response = await citySearch(userInputValue);                  
                      var res = response?.data?.data?.map(({ address }) => {
                        return {
                          city: address.cityName,
                          code: address.cityCode,
                          country: address.countryName,
                          state: address.stateCode,
                        };
                      });
                      console.log("res is :" + JSON.stringify(res));
                      if (res?.length > 0) {
                        setOptions(res);
                        setErrMsg("");
                        setIsLoading(false);
                      }else{
                        setErrMsg('City not found with term '+ userInputValue.toString() );  
                      }
                }
        }catch (err) {
              if (!err?.response) {
                  setErrMsg('No Server Response' + err);
              } else if (err.response?.status === 400) {
                  setErrMsg('Invalid data provided, update request data and re-submit');
              } else if (err.response?.status === 404) {
                  setErrMsg(`City with id: ${userInputValue} does not exist !`);
              } else if (err.response?.status === 401) {
                  setErrMsg('Unauthorized');
              } else if (err.response?.status === 403) {
                  setErrMsg('Unauthorized, forbidden, no permission to add or update.');
              } else {
                  setErrMsg('Failed to fetch  record !');
              }
          errRef.current.focus();
        }
        finally {
            setIsLoading(false);
        }
        })();
  
            return () => {
              active = false;
            };
    }, [userInputValue]);
  
    React.useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);


  return(
  <Fragment>
     <p ref={errRef} className={ErrMsg ? "errmsg" : "offscreen"} aria-live="assertive">{ErrMsg}</p>
    <Typography mb={1.3} variant="body2">Origin City: </Typography>
      {/* <pre>{JSON.stringify(options)}</pre>
      <pre>Destination City code:  { JSON.stringify(cityCode)} "  "City Count: { JSON.stringify(options.length)}</pre>  */}
      <Box>
      <Autocomplete            
            size="small"
            id="inputDestinationCity"
            autoComplete
            freeSolo
            disableClearable
            blurOnSelect
            clearOnBlur
            autoHighlight        
            //sx={{ width: 300 }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            onChange={(event, newValue) => {
              //setCityCode(newValue?.code);
              setOriginCityCode(newValue?.code);              
            }}
            onInputChange={(event, newInputValue) => {
              setUserInputValue(newInputValue);
            }}
            isOptionEqualToValue={(option, value) =>
              value === undefined ||
              option?.id?.toString() === (value?.id ?? value)?.toString()
            }
            options={options}
            loading={loading}
            getOptionLabel={(option) => option.city}
           
            renderOption={(props, option) => {
              return (
                <Grid
                  container 
                  alignItems="center"
                  {...props}
                  key={option.code}
                >
                  <Grid item>
                    <PinIcon color="secondary" sx={{ mr: 2 }} />
                  </Grid>
                  <Grid item xs >
                    <span style={{ fontWeight: 400 }}>{option?.city}</span>
                     <Typography variant="body2" color="textSecondary">
                      {option?.country}
                      {option?.state ? `, ${option?.state}` : ""} 
                    </Typography> 
                  </Grid>
                </Grid>
              );
            }}
      
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="From city/airport"
                label="Choose origin city"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <MagnifierIcon sx={{ marginLeft: 0 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (<CircularProgress color="inherit" size={20} />) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          </Box>

  </Fragment>
  )
}

export default OriginCity