import { useDispatch } from "react-redux";

import useForm from "../hooks/useForm.js";
import { startLogin } from "../action/auth.js";

const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleInputChange ] = useForm({
        email: 'challenge@alkemy.org',
        password:'react'
    })

    const { email, password } = formValues;
    // TODO: Validacion del email y el password

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(startLogin(email, password))
    }


    return (
        <div>
            <h3>Ingese su datos</h3>
            <hr />
            <form onSubmit={handleLogin}>
                <label>correo</label>
                <input
                    type="email"
                    placeholder="Ingrese su correo"
                    className="form-control"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <label>email</label>
                <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="form-control"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="submit"
                    className="form-control"
                    value="Ingresar"
                />                
            </form>
        </div>
    )
}

export default LoginScreen