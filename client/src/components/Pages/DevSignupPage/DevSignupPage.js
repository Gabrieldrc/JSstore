import React from 'react';
import DevSignUpForm from '../../Forms/DevSignUpForm/DevSignUpForm';

function DevSignupPage() {
  return(
    <div className="full_center_page">
      <div className="form_container box_shadow">
        <h1 className="title center big_font">CREATE YOUR DEV</h1>
        <DevSignUpForm />
      </div>
    </div>
  );
}

export default DevSignupPage;