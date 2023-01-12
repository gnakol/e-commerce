import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Categorie from '../components/Categorie';
import Produits from '../components/Produits';
import Promo from '../components/Promo';
import Slider from '../components/Slider';

import { ROLE_ADMIN } from '../constants/rolesConstant';
import { URL_ADMIN_HOME } from '../constants/urls/urlFrontEnd';
import { selectHasRole } from '../redux-store/authenticationSlice';


const HomeView = () => {
    const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
    const navigate = useNavigate();
    return (
        <div >

            {/* {isAdmin && (
                <button
                    className="btn btn-primary"
                    onClick={() => navigate(URL_ADMIN_HOME)}
                >
                    Admin
                </button>

            )} */}
            <div >
                <Slider />
            </div>
            <br/>
            <div>
                <Categorie />
            </div>
            <br/>
            <div>
                <Promo />
            </div>
            <br/>
            <div >
            <Produits />
            </div>
          
        </div>
    );
};

export default HomeView;
