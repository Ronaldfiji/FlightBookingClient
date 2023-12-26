import { Container } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom"

let Layout = () =>{

    return(
        <Fragment>
            {/* <div className="container page-wrap"> */}
            <Container maxWidth={"lg"} sx={{ marginBottom:{xs:13, md:10}}} >
                <Outlet/>
            </Container>
               
            {/* </div> */}
        </Fragment>
    )
}

export default Layout;