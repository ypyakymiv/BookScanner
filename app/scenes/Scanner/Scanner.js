import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert } from 'react-native';
import BarcodeScanner, { CameraFillMode, BarcodeType, pauseScanner, resumeScanner } from 'react-native-barcode-scanner-google';

class Scanner extends Component {

  render() {
    const { spread } = styles;
    return (
      <View style={spread}>
          <BarcodeScanner
              style={{flex: 1}}
              cameraFillMode={
                CameraFillMode.FIT
              }
              onBarcodeRead={({data, type}) => {
                pauseScanner()
                  .then(() => {this.props.onBarcodeRead({data, type})})
                  .finally(() => {resumeScanner()});
              }}
              barcodeTypes={
                BarcodeType.EAN_13|BarcodeType.EAN_8
              }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spread: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
});

export default Scanner;
