import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../reducers/books'
import { Scanner } from '../../scenes/';

class ScannerWithState extends Component {

  _onBarcodeRead = ({data, type}) => {
    this.props.library.addBook(data, type);
  };

  render() {
    return (
      <Scanner
        onBarcodeRead={this._onBarcodeRead.bind(this)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    library: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScannerWithState);
