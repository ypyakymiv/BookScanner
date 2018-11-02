import React, { Component } from 'react';
import Nav from './app/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/state/reducers';
import { YellowBox, PermissionsAndroid } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.'
]);


export default class App extends Component {
  componentDidMount() {
    const { check, PERMISSIONS, RESULTS, request } = PermissionsAndroid;

    check(PERMISSIONS.ACCESS_FINE_LOCATION).then(
      success => {  },
      failure => {
        request(PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: 'Hello',
          message: 'Give Me Permission'
        });
      }
    )
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Nav />
        </PersistGate>
      </Provider>
    );
  }
}
