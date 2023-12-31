
import axios from 'axios';

const root = "https://makeup-api.herokuapp.com/api/v1"

export const bringProducts = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
};

export const loginMe = async (credentials) => {

    //Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
    return await axios.post(`https://backend-connect-arte.vercel.app/user/login`, credentials);


}


export const searchCharacter = async (criteria) => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
}