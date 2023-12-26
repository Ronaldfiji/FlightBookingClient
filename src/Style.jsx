import {styled, Box, Slider, alpha} from '@mui/material';


export const BoxHomePage = styled(Box)(({theme}) => ({
    height:100,
    // width:"500px",
    backgroundColor: theme.palette.primary.light,   
    display:"flex" , 
    alignItems:"center",
    justifyContent:"center",
    paddingTop:20,
    paddingBottom:40,
    minHeight:'100vh'   
  }));

 export const SuccessSlider = styled(Slider)(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
    '& .MuiSlider-thumb': {
      '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      },
      '&.Mui-active': {
        boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
      },
    },
  }));