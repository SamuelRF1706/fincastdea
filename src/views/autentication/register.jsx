import React from 'react';

const Register = () => {
    return (
        <div className="container mt-5" style={{ maxWidth: "1000px" }}>
            <div className="text-center mb-4">
                <h2>Register</h2>
                <p>Please enter your credentials to register.</p>
            </div>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" id="username1" placeholder="Introduzca su nombre" required />
                </div> 
                <div className="mb-3">
                    <input type="password" className="form-control" id="lastname" placeholder="introduzca sus apellidos" required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Introduzca su correo electronico" required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Introduzca su contraseña" required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;