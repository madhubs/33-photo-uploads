import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';
import {GridList} from 'material-ui/GridList';
import {photosFetchRequest, photoCreateRequest} from '../../action/photo-action';

class DashboardContainer extends React.Component {
  componentWillMount() {
    this.props.auth ? undefined : this.props.history.replace('/');
  }

  render() {
    return (
      <div>
        <h2>This is the dashboard</h2>
      </div>
    );
  }
}
let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
