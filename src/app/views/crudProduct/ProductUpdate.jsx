import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import "bootstrap/dist/css/bootstrap.css";
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
    prixTtc: Yup.string()
        .min(1, "trop petit")
        .max(3, "trop long!")
        .required("Ce champ est obligatoire"),

    stock: Yup.string()
        .min(1, "trop petit")
        .max(3, "trop long!")
        .required("Ce champ est obligatoire"),


});





const ProductUpdate = ({ product, setIsupdate }) => {
    const navigate = useNavigate();


    const initialValues = {
        id: product.id,
        label: product.label,
        description: product.description,
        prixTtc: product.prixTtc,
        stock: product.stock

    };



    let config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.token
        }
    }



    const handleSubmit = (values) => {
        console.log(values)

        axios
            .post("http://localhost:8082/api/admin/produit/update/" + `${product.id}`, values, config)
            .then((response) => {
                if (response.status == 200) {
                    alert("votre produit a bien ete modifie")
                    setIsupdate(false)
                    navigate("/view")
                }
            }
            )

    };





    return (
        <div className="container">
            {
                <h1>{product.label}</h1>
            }
            <div className="row">
                <div className="col-md-6 offset-md-3 pt-3">
                    <h1 className="text-center">Ajouter produit</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
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
                                        // onChange={handleChange}
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
                                        // onChange={handleChange}
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
                                        // onChange={handleChange}
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
                                        stock:
                                    </label>
                                    <Field
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        // onChange={handleChange}
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="stock"
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

export default ProductUpdate;