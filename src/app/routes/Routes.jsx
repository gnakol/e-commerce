import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import PageTest from "../views/PageTest";
import About from "../views/About";

import { PrivateRoute } from "./PrivateRoute";
import ForgetPassword from "../components/account/ForgetPassword";
import UpdatePassword from "../components/account/UpdatePassword";
import Inscription from "../components/account/Register";
import Register from "../components/account/Register";

import ProductView from "../views/crudProduct/ProductView";
import ProductCreate from "../views/crudProduct/ProductCreate";
import ProductUpdate from "../views/crudProduct/ProductUpdate";
import ProductDetails from "../views/crudProduct/ProductDetails";
import Login from "../components/account/Login";
import UserList from "../views/crudUser/UserList";
import UserDetails from "../views/crudUser/UserDetails";
import TestPagination from "../components/TestPagination";


/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <RoutesContainer>
      <Route
        path={URL.URL_HOME}
        element={
          // <PrivateRoute>
            <HomeView />
          // </PrivateRoute>
        }
      />
      <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />
      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_ABOUT} element={<About />} />
      <Route path={URL.URL_FORGET} element={<ForgetPassword />} />

      <Route path={URL.URL_UPDATEPASS} element={ <UpdatePassword />} />
      <Route path={URL.URL_REGISTER} element={<Register />} />
      <Route path={"/test"} element={<PageTest />} />
      <Route path={"/view"} element={<ProductView />} />
      <Route path={"/add"} element={<ProductCreate />} />
      <Route path={"/upd"} element={<ProductUpdate />} />
      <Route path={"/detail/:id"} element={<ProductDetails />} />
      <Route path={"/connexion"} element={<Login />} />
      <Route path={"/user"} element={<UserList />} />
      <Route path={"/userdetail/:id"} element={<UserDetails />} />
      <Route path={"/page"} element={<TestPagination />} />

      
    



    </RoutesContainer>
  );
};

export default Routes;
