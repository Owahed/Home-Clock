import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import google from '../../Image/Group 573.png'
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var provider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handelGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                const { displayName, email ,photoURL} = user;
                const singedInUser = { name: displayName, email,photoURL };
                setLoggedInUser(singedInUser);
                history.replace(from);
                // setUserToken();
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    // const setUserToken=()=>{
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //         sessionStorage.setItem('token',idToken)
    //       }).catch(function(error) {
    //         // Handle error
    //       });
    // }
    return (
        <div className="text-center mt-5 pt-5">
            <h2>Login with Google</h2>
            <button onClick={handelGoogleSignIn} className="btn btn-info my-5"> <img style={{ width: "25px", marginRight: "8px" }} src={google} alt="google" /> Sign in Google</button>
            
        </div>
    );
};

export default Login;