
import React, {useState} from 'react';
import "./Login.css";
import { InputText } from '../../common/InputText/InputText';
import { checkError } from '../../services/useful';
 
export const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: ""
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

        let mensajeError = checkError(e.target.name, e.target.value);

        setCredentialsError((prevState)=>({
            ...prevState,
            [e.target.name + 'Error'] : mensajeError
        }));


     }


     return (
         <div className='loginDesign'>
            {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
            {<pre>{JSON.stringify(credentials, null,2)}</pre>}

            <InputText 
                // type, design, placeholder, name, functionHandler, onBlurFunction
                type={"email"}
                design={credentialsError.emailError === "" ? "normalInput" : "normalInput errorInput"}
                placeholder={"Email...."}
                name={"email"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
            <div className='errorText'>{credentialsError.emailError}</div>
            <InputText 
                // type, design, placeholder, name, functionHandler, onBlurFunction
                type={"password"}
                design={credentialsError.passwordError === "" ? "normalInput" : "normalInput errorInput"}
                placeholder={"Password...."}
                name={"password"}
                functionHandler={inputHandler}
                onBlurFunction={inputCheck}
            />
            <div className='errorText'>{credentialsError.passwordError}</div>
         </div>
     )
}
