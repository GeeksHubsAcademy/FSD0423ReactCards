
import React, {useState, useEffect} from 'react';
import "./Home.css";
import { bringProducts } from '../../services/apiCalls';
import { ProductCard } from '../../common/ProductCard/ProductCard';
 
export const Home = () => {


    const [products, setProducts] = useState([]);

    useEffect(()=>{

        if(products.length === 0){

            //Me traes los productos porque ahora mismo no tengo N A D A 

            bringProducts()
                .then(
                    resultados => {
                        setProducts(resultados.data.results)
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
                        <div className="carlosManda">
                            {
                                products.slice(0,20).map(
                                    product => {
                                        return (
                                            <div key={product.id}>
                                                <ProductCard
                                                    id={product.id}
                                                    name={product.name}
                                                    image={product.image}
                                                    brand={product.species}
                                                />

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
