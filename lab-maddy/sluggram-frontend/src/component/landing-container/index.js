import React from 'react';
import AuthForm from '../auth-form';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {signupRequest, loginRequest} from '../../action/auth-action';

class LandingContainer extends React.Component {
  render() {
    let {params} = this.props.match;
    console.log(this.props);
    let handleComplete = params.auth === 'login' ?
      this.props.login :
      this.props.signup;

//REFORMATTED
    return (
       <div>
        {this.props.auth ?
          <h2>hello world from landing!</h2> :
          <AuthForm
          auth={params.auth}
          onComplete={handleComplete}/>
        }
       </div>
    );
  }
}

//added on 10/11 before starting on lab 33
let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
