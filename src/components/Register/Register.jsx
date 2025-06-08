import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="card-body">
                <form className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Already have an account? please <Link className='underline text-blue-400' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;