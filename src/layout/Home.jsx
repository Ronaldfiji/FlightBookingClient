import { Container, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import  {BoxHomePage} from "../Style.jsx"
const Home = () => {
  return (
    <Fragment>
        <Container>
            <BoxHomePage>
                <Typography variant='h1'>
                    Home Page
                </Typography>
            </BoxHomePage>           

        </Container>
    </Fragment>
  )
}

export default Home