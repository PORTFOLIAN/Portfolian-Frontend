// GoogleButton.js

import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId =
  '397674047305-0h4da8546guk4qn6687tpaoj1u06in1d.apps.googleusercontent.com';

export default function GoogleButton({ onSocial }) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;

    // await onSocial({
    //     socialId : googleId,
    //     socialType : 'google',
    //     email,
    //     nickname : name
    // });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
