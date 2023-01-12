import { LockClosedIcon } from "@heroicons/react/solid";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

import  {URL_ADMIN_HOME}  from "../../constants/urls/urlFrontEnd"
import { signIn } from "../../redux-store/authenticationSlice";
import PageTest from "../../views/PageTest";
import { authenticate } from "./../../api/backend/account";

/**
 * Component Login
 *
 * @author Peter Mollet
 */
const Login = () => {
  const [errorLog, setErrorLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const URL_HOME = "/home";

  const handleLogin = (values) => {
    authenticate(values)
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data.accessToken) {
          dispatch(signIn(res.data.accessToken));
          navigate( URL_ADMIN_HOME);
        }
      })
      .catch(() => setErrorLog(true));
  };

  return (
    <div className="w-full max-w-md space-y-8 rounded-md bg-white p-4 py-12 px-4 shadow sm:px-6 lg:px-8">
      <div>
        <div className="flex justify-center">
          <img
            className="h-12 w-auto cursor-pointer sm:h-10"
            src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
            alt=""
            width={200}
            height={60}
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
          Sign in to your account
        </h2>
      </div>

      <hr />

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        <Form className="mt-8 space-y-6">
          <div className="flex flex-col space-y-3 rounded-md shadow-sm">
            <Field
              type="text"
              name="email"
              placeholder="email"
              autoComplete="email"
              className="input"
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              className="input"
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-center ">
              <Link to="/forgot-password" className="p-10">
                <span className="cursor-pointer font-medium text-primary-dark hover:text-primary">
                  Forgot your password?  
                </span>
              </Link>
             
              <Link to="/register">
                <span className="cursor-pointer font-medium text-primary-dark hover:text-primary">
                     Register?
                </span>
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary group relative w-full"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-primary-dark group-hover:text-primary-light"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
          {errorLog && (
            <div className="flex justify-center">
              <small className="text-sm italic text-red-600">
                Login/Password incorrect(s)
              </small>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
