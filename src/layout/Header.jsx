import React from 'react'

import "@fontsource/roboto";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';

import { Link } from 'react-router-dom';
import { Scale } from '@mui/icons-material';
const pages = ['Home', 'SignUp', 'SignIn','profile'];
const page_s = [
  {Name: 'Home', Link: "/"},  
  {Name: 'Profile', Link: "/user/profile"}, 
  {Name: 'Signin', Link: "/user/signin"}, 
  {Name: 'Signup', Link: "/user/signup"},
  {Name: 'Flight', Link: "/flight/search"} ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>         
            <YardOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , color:'gold'}} 
            color= 'secondary' fontSize="large"  />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 600,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontFamily:'Microsoft JhengHei Light',
              }}
            >
              Fly Now
            </Typography>  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <YardOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 ,  color:'gold'}} fontSize='large' />  
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,               
                fontWeight: 600,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',               
                fontFamily:'Microsoft JhengHei Light',
              }}
            >
              Fly Now
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {page_s.map((page, i) => (
              <Link  key={i} to={page.Link} className='menu-link' style={{margin:10, fontFamily:"roboto"}}> {page.Name}</Link>
              ))}
            </Box>
            {/* <Button
            key={page.Name} onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' ,textTransform:'capitalize'}}
            to='/user/profile'>{page.Name}</Button>  */}
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/tomatoe.jfif" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

export default Header