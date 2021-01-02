import React , {useState} from 'react'
import './Login.css'
import { Link , useHistory } from 'react-router-dom';
import {auth} from './firebase'

function Login() {

    const history = useHistory();
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="bg-black">
           
           <section className="intro-3" style={{ height: '100vh'}}>
                <div className="mask h-100 d-flex justify-content-center align-items-center">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto my-lg-4">
                        
                        <div className="card">
                            <div className="card-body">
                            
                            <h5 className="card-header aqua-gradient white-text text-center py-4">
                                <strong>Sign in</strong>
                            </h5>
                    
                            <div className="md-form">
                                <i className="fas fa-envelope prefix white-text" />
                                <input type="text" value={email} onChange={e => setEmail(e.target.value)} id="orangeForm-email" className="form-control" />
                                <label htmlFor="orangeForm-email">Your email</label>
                            </div>
                            <div className="md-form">
                                <i className="fas fa-lock prefix white-text" />
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="orangeForm-pass" className="form-control" />
                                <label htmlFor="orangeForm-pass">Your password</label>
                            </div>
                            <div className="text-center">
                                <button type="submit" onClick={signIn} className="btn aqua-gradient btn-lg">Sign In</button>
                                
                                <p className="fw-600 fs-13 pt-3">
                                    By Signing-in you are agree to the Ecommerce conditions of use & sale . Please See Our Privacy Notice , our Cookies Notice and our Interest-Based Ads Notice
                                </p>

                                <button type="submit" onClick={register} className="btn aqua-gradient btn-lg">Create Your Account</button>

                                <Link to="/">
                                    <p className="text-black pt-3 fs-13">Back To Home</p>
                                </Link>
                                
                            </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </section>

    
        </div>
    )
}

export default Login