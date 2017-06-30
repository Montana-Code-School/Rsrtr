import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Login extends React.Component{

  // constructor (props, context) {
  //   super(props, context);
  // }

  responseFacebook (response) {
    console.log(response);
  }

  render () {
    return (
      <div>
        <FacebookLogin
          appId="149079708982817"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          //cssClass="FBbutton"

          icon="fa-facebook"
        />

        </div>
    );
  }
}
