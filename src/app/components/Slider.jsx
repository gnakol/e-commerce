import React from 'react';

import { productStore} from "../redux-store/productSlice"
import { useDispatch } from "react-redux";
import { fetchProduitListe } from '../api/backend/account';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Cards from './Cards';

const Slider = () => {

    // const dispatch = useDispatch();

    const [productList, setProductList] = useState ([]);

    useEffect(() => {
        fetchProduitListe().then((response)=>{
          console.log(response.data);
          setProductList(response.data);
         
          // console.log()
          // console.log()
  
        } )
       
        },[]);
        // dispatch(productStore(productList));


    const baseUrl = "http://react-responsive-carousel.js.org/assets/";
    const datas = [
        {
            id:1,
            // image: "src\app\assets\img\ico_panier.png",
            image: `${baseUrl}1.jpeg`,
            link: "http://wwww.google.com",
            title: "Titre du slider 1",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
             Maxime iure laudantium sed! Ex eius soluta repellendus laudantium 
             doloribus excepturi at illum, aspernatur molestias atque nobis dolore
              quam non ad quos.`,
        },
        {
            id:2,
            image: `${baseUrl}2.jpeg`,
            link: "http://wwww.google.com",
            title: "Titre du slider 2",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
             Maxime iure laudantium sed! Ex eius soluta repellendus laudantium 
             doloribus excepturi at illum, aspernatur molestias atque nobis dolore
              quam non ad quos.`,
        },
        {
            id:3,
            image: `${baseUrl}3.jpeg`,
            link: "http://wwww.google.com",
            title: "Titre du slider 3",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
             Maxime iure laudantium sed! Ex eius soluta repellendus laudantium 
             doloribus excepturi at illum, aspernatur molestias atque nobis dolore
              quam non ad quos.`,
        },
        {
            id:4,
            image: `${baseUrl}4.jpeg`,
            link: "http://wwww.google.com",
            title: "Titre du slider 4",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
             Maxime iure laudantium sed! Ex eius soluta repellendus laudantium 
             doloribus excepturi at illum, aspernatur molestias atque nobis dolore
              quam non ad quos.`,
        },
        {
            id:5,
            image: "./main.jpg",
            link: "http://wwww.google.com",
            title: "Titre du slider 5",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
             Maxime iure laudantium sed! Ex eius soluta repellendus laudantium 
             doloribus excepturi at illum, aspernatur molestias atque nobis dolore
              quam non ad quos.`,
        }
    ]

    return (
        <Carousel autoPlay
         interval={6000}
         infiniteLoop
         thumbWidth={120}
         showIndicators={false}
         showStatus={true}>
        
        {/* <div>slider1</div>
        <div>slider2</div>
        <div>slider3</div> */}

        {productList.map(product => (
            <div key={product.id}>
                 {/* <Cards key={product.id} product={product} /> */}
                {/* <img src={slide.image}   alt="" /> */}
                <img src={`${baseUrl}4.jpeg`}   alt="" />
                <div className='overlay'>
                    <h2 className='overlay_title'>{product.label}</h2>
                    <h4 className='overlay_text'>Description:<br/></h4> <p>{product.description}.</p>
                    <p>Prix: {product.prixTtc}€</p>
                </div>
            </div>
        ))}
        </Carousel>
    );
};

export default Slider;