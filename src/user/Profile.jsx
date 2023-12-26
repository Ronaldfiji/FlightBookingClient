import React from 'react'
import { Box, Typography, CssBaseline, Container} from '@mui/material'
//import { createTheme, ThemeProvider } from '@mui/material';


//const defaultTheme = createTheme();

/*defaultTheme.typography.h2 = {
  fontSize: '2.8rem',
  '@media (min-width:600px)': {
    fontSize: '13rem',
  },
  [defaultTheme.breakpoints.up('md')]: {
    fontSize: '2.9rem',
  },
};*/

const Profile = () => {
  return (
    // <ThemeProvider theme={defaultTheme}>
    <Box    sx={{      display: 'flex',      flexDirection: 'column',      minHeight: '100vh',}}>
    <Container component="main" sx={{ mt: 1, mb: 2 }} maxWidth="sm">
      <Typography variant="h2" component="h1" fontFamily={'Microsoft Yi Baiti'} marginBottom={0.5}>
        Sticky footer
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'Pin a footer to the bottom of the viewport.'}
        {'The footer will move as the main element of the page grows.'}
      </Typography>
      <Typography variant="body1">Sticky footer placeholder.</Typography>
      <Typography marginTop={30}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio doloribus accusantium quos modi, reprehenderit quo obcaecati harum tempore minima magnam magni, saepe aperiam, perferendis at perspiciatis! Tempore, optio nesciunt!
      </Typography>
      <Typography marginTop={50}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio doloribus accusantium quos modi, reprehenderit quo obcaecati harum tempore minima magnam magni, saepe aperiam, perferendis at perspiciatis! Tempore, optio nesciunt!
      </Typography>
      <p>Helo</p>
    </Container>
    </Box>
    // </ThemeProvider>
  )
}

export default Profile