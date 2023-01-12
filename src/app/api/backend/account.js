import { URL_BACK_AUTHENTICATE, URL_BACK_PRODUCTLIST, URL_BACK_USERLIST } from '../../constants/urls/urlBackEnd';
import { URL_BACK_FORGETPASS } from '../../constants/urls/urlBackEnd';
import { URL_BACK_UPDATEPASS } from '../../constants/urls/urlBackEnd';
import { URL_BACK_REGISTER } from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values);
}
export function forgetpass(values) {
    return apiBackEnd.post(URL_BACK_FORGETPASS, values);
}
export function updatePass(values) {
    return apiBackEnd.post(URL_BACK_UPDATEPASS, values);
}
export function register(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values);
}

export function fetchProduitListe() {
    return apiBackEnd.get(URL_BACK_PRODUCTLIST);
}

export function fecthUserListe() {
    return apiBackEnd.get(URL_BACK_USERLIST);
}


