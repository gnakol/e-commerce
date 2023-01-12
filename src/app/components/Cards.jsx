import React from 'react';

import image from '../assets/img/console.png';


const Cards2 = ({product}) => {
        return (
            <div className="">
           
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-90" src={image} alt="Mountain"/>
              <div className="px-4 py-2">
                <div className="font-bold text-xl mb-2">{product.label}</div>
                <p className="text-gray-700 text-base">
                 {product.description}.
                </p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stock : {product.stock}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Réf : {product.reference}</span>
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Prix : {product.prixTtc} €</span>
              </div>
            </div>
          
           
          </div>
       
          );
};

export default Cards2;