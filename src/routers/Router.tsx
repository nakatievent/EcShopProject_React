import React, { FC } from 'react';
import { createBrowserRouter } from 'react-router-dom'

// import { Route, Routes } from "react-router-dom";
// import { Login } from "../components/Login";
// import { Test } from "../components/Test";
// import { SignIn } from "../pages/SignIn";
// import { FailedLogin } from "../pages/FailedLogin";
// import { Memo } from "../pages/Memo";
import { Sample } from "../pages/Sample";
import { Login } from "../pages/Login";
// import Top from "../pages/Top";
// import { useAuth } from '../hooks/AuthContext';

export const Router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />
  }, {
    path: '/sample',
    element: <Sample />
  // }, {
  //   path: '/test',
  //   element: <Test />
  // }, {
  //   path: '/memo',
  //   element: <Memo />
  // }, {
  //   path: '/fail_login',
  //   element: <FailedLogin />
  // }, {
  //   path: '/sign_in',
  //   element: <SignIn />
  // }, {
  //   path: '/sign_up',
  //   element: <SignUp />
  // }, {
  //   path: '/top',
  //   element: <Top />
  }
])
