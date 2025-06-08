// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
// import { auth } from '../../firebase.init';

const Register = () => {

    const { createUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {



        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //create user with email & password
        // createUserWithEmailAndPassword(auth, email, password).then(result => {
        //     console.log(result);
        // }).catch(error => {
        //     console.log(error);
        // })

        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Your Name" name='name' />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account? please <Link className='underline text-blue-400' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;