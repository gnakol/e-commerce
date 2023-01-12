import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ProductUpdate from './ProductUpdate';
import { productStore } from "../../redux-store/productSlice"
import { useDispatch } from 'react-redux';
import { fetchProduitListe } from '../../api/backend/account';

const ProductView = () => {
  const [isUpdate, setIsupdate] = useState(false)
  const [productList, setProductlist] = useState([])
  const [produit, setProduit] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const products = useSelector(state => state.product)
  // const productList = products.product;



  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.token
    }
  }

  console.log(localStorage.token)


  // useEffect(() => {


  //   fetchProduitListe().then((response) => {
  //     setProductlist(response.data)
  //     dispatch(productStore(response.data));

  //   })

  // }, []);

  const [page, setPage] = useState(0)
  const[nbPage, setNbPage]= useState(0)

  useEffect(() => {
    fetchList(page)
  }, []);

  const fetchList = (page) => {
    axios
        .get("http://localhost:8082/api/public/produit/liste?page=" + `${ page }` + "&size=" + 2)
        .then(response => {
          setProductlist(response.data.content),
          setNbPage(response.data.totalPages)
        console.log(response.data)})
}

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

  const handleDelete = (produit) => {
    axios
      .delete("http://localhost:8082/api/admin/produit/delete/" + `${produit.id}`, config)
      .then(response => console.log(response))
  }

  const handleUpdate = (produit) => {
    setIsupdate(true)
    setProduit(produit)
  }

  const handleView= (produit)=> {
    navigate("/detail/"+`${produit.id}`)
  }

  if (!isUpdate) {
    return (
      <div>
        {
          console.log(productList)
        }

        <div className="container">
          <h2> List des Produits</h2>

          <table className="table">
            <thead>
              <tr>
                <th>product id</th>
                <th>product name</th>
                <th>product description</th>
                <th>produit prix</th>
                <th>Actions</th>

              </tr>
            </thead>
            <tbody>

              {
                productList.map(produit => (
                  <tr key={produit.id}>
                    <td>{produit.id}</td>
                    <td>{produit.label}</td>
                    <td>{produit.description}</td>
                    <td>{produit.prixTtc}</td>
                    <td>
                      <button type="button" className="btn btn-primary" onClick={() => handleUpdate(produit)} >Editer</button>
                      <button type="button" className="btn btn-info" onClick={()=>handleView(produit)}>Details</button>
                      <button type="button" className="btn btn-danger" onClick={() => handleDelete(produit)} >Supprimer</button>
                    </td>
                  </tr>
                ))
              }


            </tbody>
          </table>

          
          <button
            className="btn btn-primary"
            onClick={() => navigate("/register")}
          >
            Ajouter
          </button>
          <br/><br/>
          <div className='btn w-full'>
          {/* <button type="button" className="btn bg-transparent btn-info"  onClick={() => next(page+1)} >Next</button> */}
          {page == 0 ? (
            <button type="button" className="btn bg-transparent btn-info" disabled onClick={() => before(page-1)}>Prev</button>
            ) : (
              <button type="button" className="btn bg-transparent btn-info" onClick={() => before(page-1)}>Prev</button>
            )}
         
          <button type="button" className="btn bg-transparent btn-info" onClick={() => fetchList(0)} >{page+1}</button>
          {/* <button type="button" className="btn bg-transparent btn-info"  onClick={() => next(page+1)} >Next</button> */}
          {page < nbPage-1 ? (
             <button type="button" className="btn bg-transparent btn-info"  onClick={() => next(page+1)} >Next</button>
            ) : (
              <button type="button" className="btn bg-transparent btn-info" disabled onClick={() => next(page+1)} >Next</button>
            )}
</div>
        </div>

      </div>
    );
  }

  return <ProductUpdate product={produit} setIsupdate={setIsupdate} />






};

export default ProductView;