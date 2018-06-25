import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Alert color="info">{this.props.message}</Alert>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.shared.message
  }
}

export default connect(mapStateToProps)(Home)