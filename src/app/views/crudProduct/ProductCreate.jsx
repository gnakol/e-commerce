import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    label: Yup.string()
        .min(4, "trop petit")
        .max(50, "trop long!")
        .required("Ce champ est obligatoire"),

        description: Yup.string()
        .min(10, "trop petit")
        .max(200, "trop long!")
        .required("Ce champ est obligatoire"),
        
        prixTtc: Yup.number()
        .min(1, "trop petit")
        .max(5000, "trop long!")
        .positive()
        .required("Ce champ est obligatoire"),
     
        stock: Yup.number()
        .min(1, "trop petit")
        .max(500, "trop long!")
        .positive()
        .required("Ce champ est obligatoire"),

        reference: Yup.string()
        .min(4, "trop petit")
        .max(50, "trop long!")
        .required("Ce champ est obligatoire"),
     
   
});

const initialValues = {
    label: "",
    description: "",
    prixTtc: 0,
    stock: 0,
    reference: "",

};



const ProductCreate = () => {
    const navigate = useNavigate();


    
let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.token
    }
  }

  console.log(localStorage.token)



    const handleSubmit = (values) => {
        console.log(values)

        axios
        .post("http://localhost:8082/api/admin/produit/create",values,config)
        .then((response) =>{
             if(response.status==201){
                alert("votre produit a bien ete ajoute")
                navigate("/view")
             }
        }
            )

      
    };




    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Ajouter produit</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="label">
                                        label:
                                    </label>
                                    <Field
                                        type="text"
                                        id="label"
                                        name="label"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="label"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="description">
                                        description:
                                    </label>
                                    <Field
                                        type="text"
                                        id="description"
                                        name="description"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="prixTtc">
                                    prixTtc:
                                    </label>
                                    <Field
                                        type="number"
                                        id="prixTtc"
                                        name="prixTtc"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="prixTtc"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="stock">
                                        Stock:
                                    </label>
                                    <Field
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="stock"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="reference">
                                        reference:
                                    </label>
                                    <Field
                                        type="text"
                                        id="reference"
                                        name="reference"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="reference"
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

export default ProductCreate;