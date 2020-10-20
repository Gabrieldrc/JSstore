import React from 'react';
import SignInUserForm from '../Forms/SignInUserForm/SignInUserForm';
import Title from '../Title/Title';
import './SigninPage.css';

function SigninPage(props) {
  return(
    <div className="SigninPage">
      <div className="SigninContainer">
        <Title style={{fontWeight: "200"}}>SIGN IN <span style={{fontSize: '1.5rem'}}>with your OS account</span></Title>
        <SignInUserForm 
          setSignInStatus={props.setSignInStatus}/>
        <span className="border border-top"></span>
        <span className="border border-right"></span>
        <span className="border border-bottom"></span>
        <span className="border border-left"></span>
      </div>
    </div>
  );
}

export default SigninPage;