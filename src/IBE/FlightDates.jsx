import React, { Fragment, useState , useRef, useEffect} from 'react'
import {   Typography,   Grid} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const FlightDates = ({departureDate,
  returnDate,
  setDepartureDate,
  setReturnDate, returnJourney}) => {

    const minDepartureDate = useRef(dayjs().format());
    const maxDeparturedate = useRef(dayjs().add(1,'year'))  

    useEffect(() => {
      // const minCheckOutDate = checkInDate.add(1, "day");
      // setCheckOutDate(
      //   +minCheckOutDate > +checkOutDate ? minCheckOutDate : checkOutDate
      // );
      //console.log("dept date is : " + dayjs(dayjs(departureDate).add(1,"day")).format() )
     // setReturnDate(returnDate < departureDate ? dayjs(dayjs(departureDate).add(1,"day")).format() : returnDate)
      setReturnDate(returnJourney === false? dayjs(dayjs(departureDate).subtract(2,"day")).format() :
      returnDate < departureDate ? dayjs(dayjs(departureDate).add(1,"day")).format() : 
      returnDate)
    }, [departureDate, returnDate, setReturnDate, returnJourney]);
  
  return (
    <Fragment>
      <Typography mb={1.2} mt={1.2} variant="body2" gutterBottom>
        Departure date:{" "}
      </Typography>
      <DatePicker
        value={dayjs(departureDate)}
        minDate={dayjs(minDepartureDate.current)}
        maxDate={dayjs(maxDeparturedate.current)}
        onChange={(date) => setDepartureDate(dayjs(date).format())}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            height: "40px",
          },
        }}
      />

      
        <div >
          <Typography mb={1.2} mt={1.2} variant="body2" gutterBottom sx={{display: returnJourney===false ? 'none' : ''}}>
            Return date:
          </Typography>
          <DatePicker 
            autoOk
            variant="inline"
            inputVariant="outlined"
            value={dayjs(returnDate)}
            onChange={(date) => setReturnDate(dayjs(date).format())}
            minDate={dayjs(minDepartureDate.current)}
            maxDate={dayjs(maxDeparturedate.current)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                height: "40px",
              },
              display: returnJourney===false ? 'none' : ''
            }}
          />
        </div>
      
    </Fragment>
  );
}

export default FlightDates