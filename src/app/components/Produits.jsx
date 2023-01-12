import React from 'react';
import { useEffect, useState } from 'react';
import { fetchProduitListe } from '../api/backend/account';
import Cards from './Cards';

import axios from 'axios';

import { useDispatch } from "react-redux";
import { productStore} from "../redux-store/productSlice"


const Produits = () => {

    const dispatch = useDispatch();

  const [page, setPage] = useState(0)
  const [nbPage, setNbPage]= useState(0)
  const [size, setSize] = useState(3)
  
  const [productList, setProductList] = useState ([]);

    
    // useEffect(() => {
    //   fetchProduitListe().then((response)=>{
    //     console.log(response.data);
    //     setProductList(response.data);
       
    //     // console.log()
    //     // console.log()

    //   } )
     
    //   },[]);
    //   dispatch(productStore(productList));
    useEffect(() => {
      fetchList(page)
    }, []);
    
    console.log("page actuelle = "+ page)
    
    const fetchList = (page) => {
        axios
            .get("http://localhost:8082/api/public/produit/liste?page=" + `${ page }` + "&size=" + size)
            .then(response => {
              setProductList(response.data.content),
              setNbPage(response.data.totalPages)
            console.log(response.data)})
    }

    console.log(productList);

    const next = (page)=>{
      if(page < nbPage){
      setPage(page) 
      fetchList(page)}
    }
    
    const before = (page) => {
      setPage(page)
      if (page < 0){
        setPage(0)
      }else {
      fetchList(page)
    }}

    return (
        <div className='content-between  '>
        <div className='h-56 grid grid-cols-3 gap-4 w-full content-start'>
            {
                productList
                .map((produit, index) => (
                    <Cards key={index} product={produit} />)
            )}
        </div>
  
        <div className='btn w-full '>
            {/* <button type="button" className="btn bg-transparent btn-info"  onClick={() => next(page+1)} >Next</button> */}
            {page == 0 ? (
              <button type="button" className="btn bg-transparent btn-info" disabled onClick={() => before(page - 1)}>Prev</button>
            ) : (
              <button type="button" className="btn bg-transparent btn-info" onClick={() => before(page - 1)}>Prev</button>
            )}

            <button type="button" className="btn bg-transparent btn-info" onClick={() => fetchList(0)} >{page + 1}</button>
            {/* <button type="button" className="btn bg-transparent btn-info"  onClick={() => next(page+1)} >Next</button> */}
            {page < nbPage - 1 ? (
              <button type="button" className="btn bg-transparent btn-info" onClick={() => next(page + 1)} >Next</button>
            ) : (
              <button type="button" className="btn bg-transparent btn-info" disabled onClick={() => next(page + 1)} >Next</button>
            )}

          </div>
        </div>
    );
};

export default Produits;