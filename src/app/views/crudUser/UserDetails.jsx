import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserDetails = () => {

    const params = useParams();
    const currentUser = useSelector(state => state.user);
    const userList = currentUser.user;
    const user = userList.filter(item => item.id == params.id);

    console.log(user);
    console.log(params);


    return (
        <div>
            <body class="bg-gray-300 flex justify-center items-center h-screen">
  <div class="bg-white p-10 rounded-lg shadow-md"><h3>Utilisateur id : {user[0].id}</h3> 

    <div class="mt-4 mb-4">
    <p class="text-gray-600"><h1>{user[0].nom}</h1></p>
      <p class="text-gray-600"><h2>{user[0].prenom}</h2></p>
      <p class="text-gray-600"><h3>{user[0].email}</h3></p>
      
      <div class="bg-gray-400 w-full h-3 rounded-lg mt-2 overflow-hidden">
        <div class="bg-green-400 w-4/4 h-full rounded-lg shadow-md"></div>
      </div>
    </div>
    <h3 class="tracking-wide"> Adresse : </h3>
    <h4 class="">
   43 Boulevard de Moselle 59000 Lille
      <br />
    </h4>
  </div>
</body>
        </div>
    );
};

export default UserDetails;