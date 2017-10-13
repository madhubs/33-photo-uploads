
import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {tokenSet} from '../../action/auth-action';
import LandingContainer from '../landing-container';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import SettingsContainer from '../settings-container';
import DashboardContainer from '../dashboard-container';


class App extends React.Component {
  componentDidMount() {
    let token = utils.cookieFetch('X-Sluggram-Token');
    if(token) this.props.tokenSet(token);
  }

  render() {
    return (
      <div className="application">
          <BrowserRouter>
            <div>
              <Navbar />
              <Route path="/settings" component={SettingsContainer}/>
              <Route path="/welcome/:auth" component={LandingContainer}/>
              <Route exact path="/dashboard" component={DashboardContainer}/>
              {/* <FooterContainer /> */}
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
