//Redirect 
/* import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'; */

import {
    //auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    //signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';

import  SignUpForm  from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
    //Redirect' in siteyi sıfırdan mount etmesinden dolayı
    /* useEffect(() => { 
        const helper = async () => {
            const response = await getRedirectResult(auth);
            console.log(response);
        }
        helper();
    }, []); */


    return (
        <div className='authentication-container'>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
            
        </div>
    )
}

export default Authentication;