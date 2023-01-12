import React from 'react';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import image from '../../assets/img/console.png';




const ProductDetails = () => {

    const params = useParams();
    const currentProduct = useSelector(state => state.product)
    const productList = currentProduct.product;
    const product = productList.filter(item =>item.id == params.id)

    console.log(product);
    console.log(params);

    return (
        
        <div id="container">	
	
        <div class="product-details">
            
        <h1>{product[0].label}</h1>

          <p class="information">{product[0].description}.</p>
    
            
            
    <div class="control">
        
        <button class="btn">
         <span class="price">{product[0].prixTtc}€</span>
       {/* <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span> */}
       <span class="buy">Acheter</span>
     </button>
        
    </div>
                
    </div>
        
    <div class="product-image">
        
        <img src={image} alt=""/>
        
    
    <div class="info">
        <h2> Description</h2>
        <ul>
            <li><strong>Prix : </strong>{product[0].prixTtc}€</li>
            <li><strong>Stock : </strong>{product[0].stock} unitées</li>
            <li><strong>Référence : </strong>{product[0].reference}</li>
            
        </ul>
    </div>
    </div>
    
    </div>
        
    );
};

export default ProductDetails;