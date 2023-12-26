import React from 'react'
import { Typography , Link, Paper, Container, Box } from '@mui/material';
const Footer = () => {

    const  Copyright = (props) =>  {
        return (
          <Typography variant='subtitle1' align='center' color="text.secondary"  paragraph fontSize={10}>
            {'Copyright © '}
            <Link color="inherit" href="https://fijii.netlify.app">
             Fiji software Pty Ltd
            </Link>{" "+new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

  return (
    <Paper sx={{marginTop: 'calc(10% + 160px)',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color:'text.secondary',
    }} component="footer" square variant="outlined">
         <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1

          }}
        >
          <Typography align='center'>Your empowerment and satisfaction is our pleasure.</Typography>
           
        </Box>
        
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",           
          }}
        >
          <Typography variant="caption" color="initial">
            {/* Copyright ©2022. [] Limited  */}
             <Copyright /> 
          </Typography>
        </Box>
        </Container>
    </Paper>
  );


}

export default Footer