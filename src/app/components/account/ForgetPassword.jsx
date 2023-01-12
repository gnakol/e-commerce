import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";
import { forgetpass } from "./../../api/backend/account";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  
    email: Yup.string()
        .email("email invalide")
        .required("l'email est obligatoire"),
});
const initialValues = {
    email: ""
};

const ForgetPassword = () => {

    const navigate = useNavigate();

    
    
    const handleSubmit = (values) => {
        console.log(values)
        forgetpass(values)
        .then((res) => {
   
      
          if (res.status === 202 ) {
            alert(res.data)
            navigate("/login");
          }
        })
   

    };
    



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Mot de passe oublie</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
         
                    
                                <div className="form-group mb-3">
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                
                                <div className="form-group d-flex justify-content-end gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Valider
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="btn btn-danger"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;