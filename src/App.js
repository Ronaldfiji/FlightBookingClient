import logo from './logo.svg';
import './App.css';
import { useState } from "react";


import { CssBaseline,} from "@mui/material";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import Profile from "./user/Profile";
import SignIn from "./user/SignIn";
import SignUp from "./user/SignUp";
import Search from "./IBE/Search";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/en-gb';
import dayjs from 'dayjs';


function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/signin" element={<SignIn />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/flight/search" element={<Search />} />
        </Route>
      </Routes>
      
      <Footer/>
      </LocalizationProvider>
    </>
  );
}

export default App;
