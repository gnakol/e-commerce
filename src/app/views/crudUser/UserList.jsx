import React from 'react';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fecthUserListe } from '../../api/backend/account';
import { userStore } from "../../redux-store/userSlice";
import UserUpdate from './UserUpdate';
import axios from 'axios';
import { current } from '@reduxjs/toolkit';


const UserList = () => {

  const [isUpdate, setIsupdate] = useState(false);
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();


  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.token
    }
  }
  console.log(localStorage.token)


  // useEffect(() => {
  //   fecthUserListe().then((response) => {
  //     setUserList(response.data)
  //     dispatch(userStore(response.data));

  //   })

  // }, []);



  const [page, setPage] = useState(0)
  const [nbPage, setNbPage] = useState(0)
  const [size, setSize] = useState(3)


  const handleChange = (e) => {
    // 👇 Get input value from "event"
    setSize({
      [e.target.name]: e.target.value
    });
  };
  //  handleChange(e) {
  //   this.setState({
  //       [e.target.name]: e.target.value
  //   });
  // }






  useEffect(() => {
    fetchList(page)
  }, []);

  console.log("page actuelle = " + page)

  const fetchList = (page) => {
    axios
      .get("http://localhost:8082/api/public/user/liste?page=" + `${page}` + "&size=" + size)
      .then(response => {
        setUserList(response.data.content),
          setNbPage(response.data.totalPages)
        console.log(response.data)
      })
  }


  const next = (page) => {
    if (page < nbPage) {
      setPage(page)
      fetchList(page)
    }
  }

  const before = (page) => {
    setPage(page)
    if (page < 0) {
      setPage(0)
    } else {
      fetchList(page)
    }
  }


  const handleDelete = (user) => {
    axios
      .delete("http://localhost:8082/api/public/user/delete/" + `${user.id}`, config)
      .then(response => console.log(response)
      )
  }

  const handleUpdate = (user) => {
    setIsupdate(true)
    setUser(user)
  }



  const handleView = (user) => {
    navigate("/userdetail/" + `${user.id}`)
  }

  console.log(size)

  if (!isUpdate) {
    return (
      <div>
        <input
          value={size}
          type="number"
          id="message"
          name="message"
          onChange={handleChange}
        />
        {
          console.log(userList)
        }

        <div className="container">
          <h2> Liste des utilisateurs</h2>

          <table className="table">
            <thead>
              <tr>
                <th> id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Actions</th>

              </tr>
            </thead>
            <tbody>

              {
                userList.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <td>
                      <button type="button" className="btn btn-primary" onClick={() => handleUpdate(user)} >Editer</button>
                      <button type="button" className="btn btn-info" onClick={() => handleView(user)}>Details</button>
                      <button type="button" className="btn btn-danger" onClick={() => handleDelete(user)} >Supprimer</button>
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
          <br />
          <div className='btn w-full'>
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

      </div>
    );
  }

  return <UserUpdate user={user} setIsupdate={setIsupdate} />

};

export default UserList;