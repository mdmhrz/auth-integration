import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    const { signInUser } = use(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })

    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to this site? please <Link className='underline text-blue-400' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;