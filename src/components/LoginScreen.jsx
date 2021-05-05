import React from 'react'

const LoginScreen = () => {
    return (
        <div>
            <h3>Ingese su datos</h3>
            <hr />
            
            <form onSubmit="">
                <input
                    type="text"
                    placeholder="Ingrese su contraseña"
                    className="form-control"
                    name="email"
                    autoComplete="off"
                    >
                    Correo
                </input>
                <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="form-control"
                    name="email"
                    autoComplete="off"
                >
                    Contraseña
                </input>

                <button
                    className="btn btn-primary"
                    // onClick={}
                    >
                        Login
                </button>
                
                <button
                    className="btn btn-primary"
                    // onClick={}
                >
                    Login con Facebook
                </button>    
            </form>
        </div>
    )
}

export default LoginScreen
