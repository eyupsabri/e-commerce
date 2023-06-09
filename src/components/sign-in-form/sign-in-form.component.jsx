import { useState, useContext } from 'react';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    //const { setCurrentUser } = useContext(UserContext);

    
    //Clear filled parts after succesfull sign up
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    //Sign up with email and password
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            //setCurrentUser(user);
            
            resetFormFields();
        } catch (err) {
            switch(err.code){
                case "auth/user-not-found":
                    alert("email not found");
                    break
                case "auth/wrong-password":
                    alert('incorrect password for email');
                    break;
            }

            console.log(err);
           
        }
    }

    const handleChange = (event) => { //spread the existing ones change the updated one
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>google sign in</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;