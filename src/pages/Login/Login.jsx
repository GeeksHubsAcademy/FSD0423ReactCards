
import React, {useState} from 'react';
import "./Login.css";
import { InputText } from '../../common/InputText/InputText';
 
export const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

     const inputHandler = (e) => {

        //Ahora vamos a proceder a bindear o atar los inputs mediante
        //la presente función handler a sus correspondientes estados en el hook, que 
        //ahora se llama credentials.

        setCredentials((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));

     }

     const inputCheck = (e) => {

        console.log(e.target.value, "soy el check....");
        console.log(e.target.name, "soy el check....");

     }




     return (
         <div className='loginDesign'>
            {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
            {<pre>{JSON.stringify(credentials, null,2)}</pre>}

            <InputText 
                // type, design, placeholder, name, functionHandler, onBlurFunction
                type={"email"}
                design={"normalInput"}
                placeholder={"Email...."}
                name={"email"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
            <InputText 
                // type, design, placeholder, name, functionHandler, onBlurFunction
                type={"password"}
                design={"normalInput"}
                placeholder={"Password...."}
                name={"password"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
         </div>
     )
}
