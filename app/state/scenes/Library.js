import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Library } from '../../scenes';

class LibraryWithState extends Component {
  render() {
    return (
      <Library {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.books
  };
}

function mapDispatchToProps(dispatch) {

}
export default connect(mapStateToProps, null)(LibraryWithState);
