import React from 'react';

import { auth } from '../../firebase';

const bodyStyle = {
  color:"white"
};
const SignOutButton = () =>
        <div style={bodyStyle}
        className="nav-item"
            onClick={auth.doSignOut}
        >
            Sign Out
  </div>

export default SignOutButton;
