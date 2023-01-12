import React from 'react';

import { useState, useEffect } from 'react';
import axios from "axios";



const Categorie = () => {

    const [catList, setCatList] = useState([])

    useEffect(() => {
        fetchCat()
    }, []);




    const fetchCat = () => {
        axios
            .get("http://localhost:8082/api/public/categorie/liste")
            .then(response =>
                setCatList(response.data)
            )
    }
    console.log(catList)
    return (
        <div className='flex justify-evenly'>
            {
                catList.map(cat => (
                    <div  key= {cat.id} className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Catégorie : {cat.nom_categorie}</h5>
                                <p className="text-gray-700 text-base mb-4">id: {cat.id}</p>
                                <p className="text-gray-700 text-base mb-4">{cat.nom_categorie}</p>
                                <button type="button" className=" inline-block w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                            </div>
                        </div>
                    </div>




                )
                )
            }


        </div>

    );
};

export default Categorie;