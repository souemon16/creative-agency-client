import React, { useContext, useState } from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import iconGoogle from '../../images/icons/google.png';
import {Link, useHistory, useLocation} from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useContext(userContext);

    // Redirect Page 
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().useDeviceLanguage();
        firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            let token = result.credential.accessToken;
            let user = result.user;
            const { displayName, photoUrl, email } = result.user;
            const userDetails = {
                isSignedIn : true,
                userName : displayName,
                userEmail: email,
                success: true,
                error: false,
            }
            setUser(userDetails);
            setUserToken();
            sessionStorage.setItem('email', email);
            history.replace(from);
          }).catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            const signInError = {
                isSignedIn: false,
                error: errorMessage,
                success: false,
            }
            setUser(signInError);
          });

          
        }

        // Verify By ID Token 
        const setUserToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function(idToken) {
                sessionStorage.setItem('token', idToken)
              }).catch(function(error) {
                // Handle error
              });
        }

    return (
        <div id="login-section">
            <div><Link to='/'><img className='logo' src={logo} alt="Logo"></img></Link></div>
            <div className="login-form">
                <h2 className='mb-4'>Login With</h2>
                <button
                    onClick={() => handleLogin()}
                    className='btn btn-block btn-outline-secondary font-weight-bold mb-2'
                    style={{ borderRadius: '25px' }}>
                    <img className='icon' style={{ float: 'left' }} src={iconGoogle} alt="Google" ></img> Continue with Google
            </button>
                <p className='mt-3'>Don't have an account? <span> <Link>Create an account</Link></span></p>
                {user.isSignedIn ? <p className="text-success mt-3">Successfully Signed In</p>: <p className="text-danger mt-3">{user.error}</p>}
            </div>
        </div>
    );
};

export default Login;