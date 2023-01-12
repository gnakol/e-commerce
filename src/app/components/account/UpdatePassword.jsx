import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updatePass } from "./../../api/backend/account";

const UpdatePassword = () => {
    const navigate = useNavigate();
    const params = useParams();
    const initialValues = {
        resetToken:params.token,
        newPassword: "",
        confirmPassword: ""
    
    };
    const validationSchema = Yup.object().shape({
       
        newPassword: Yup.string()
            .required("Mot de passe est obligatoire")
            .min(4, "Mot de passe doit être plus grand que 4 caractères")
            .max(10, "Mot de passe doit être plus petit que 10 caractères"),
        confirmPassword: Yup.string()
            .required("Confirmation de mot de passe est obligatoire")
            .oneOf(
                [Yup.ref("newPassword"), null],
                "Le mot de passe de confirmation ne correspond pas"
            )
        
    });

    const handleSubmit = (values) => {
        delete values["confirmPassword"];
        console.log(values)
       updatePass(values)
        .then((res) => {
   
            console.log(res)
          if (res.status === 201 ) {
            alert(res.data)
            navigate("/login");
          }
        })

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Modifier le mot de pass</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                              
                                <div className="form-group mb-3">
                                    <label htmlFor="newPassword">
                                        Mot de passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="newPassword"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">
                                        Confirmer le mot de
                                        passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
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

export default UpdatePassword;