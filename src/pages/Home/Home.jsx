
import React, {useState, useEffect} from 'react';
import "./Home.css";
import { bringProducts } from '../../services/apiCalls';
 
export const Home = () => {


    const [products, setProducts] = useState([]);

    useEffect(()=>{

        if(products.length === 0){

            //Me traes los productos porque ahora mismo no tengo N A D A 

            bringProducts()
                .then(
                    resultados => {
                        setProducts(resultados.data)
                    }
                )
                .catch(error => console.log(error));
        } 

    },[products]);

     return (
         <div className='homeDesign'>
            {
                products.length > 0 
                    ? (
                        <div>
                            {
                                products.slice(0,20).map(
                                    product => {
                                        return (
                                            <div key={product.id}>
                                                {product.name}
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    )

                    : (
                        <div>CARGANDO...</div>
                    )
            }

         </div>
     )
}
