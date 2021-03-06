import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type='email' name='email' value={this.state.email} required handleChange={this.handleChange} label='Email' />
          <FormInput type='password' name='password' value={this.state.password} required handleChange={this.handleChange} label='Password' />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
