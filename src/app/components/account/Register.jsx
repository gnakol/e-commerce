import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";
import { register } from "./../../api/backend/account";
import { useNavigate } from "react-router-dom";





const Register = () =>{
    const navigate = useNavigate();
    
const validationSchema = Yup.object().shape({
    nom: Yup.string()
        .min(2, "trop petit")
        .max(50, "trop long!")
        .required("Ce champ est obligatoire"),
    prenom: Yup.string()
        .min(2, "trop petit")
        .max(10, "trop long!")
        .required("Ce champ est obligatoire"),
    email: Yup.string()
        .email("email invalide")
        .required("l'email est obligatoire"),
    password: Yup.string()
        .required("Mot de passe est obligatoire")
        .min(4, "Mot de passe doit être plus grand que 4 caractères")
        .max(10, "Mot de passe doit être plus petit que 10 caractères"),
    confirmPassword: Yup.string()
        .required("Confirmation de mot de passe est obligatoire")
        .oneOf(
            [Yup.ref("password"), null],
            "Le mot de passe de confirmation ne correspond pas"
        ),

});

const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
   
};

    
    
    const handleSubmit = (values) => {
        delete values["confirmPassword"];
        console.log(values)
        register(values)
        .then((res) => {
            console.log(res.data)
      
          if (res.status === 200 ) {
            alert("veuillez vous connecter")
            navigate("/login");
          }
        })
   

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Nouvel utilisateur</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="prenom">
                                        Prénom:
                                    </label>
                                    <Field
                                        type="text"
                                        id="prenom"
                                        name="prenom"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="prenom"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="nom">
                                        Nom:
                                    </label>
                                    <Field
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="nom"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
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
                                <div className="form-group mb-3">
                                    <label htmlFor="password">
                                        Mot de passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="password"
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
                                        S'inscrire
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
    }


export default Register;