import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Container, Header, Footer } from 'native-base';
import IconButton from './IconButton';

class LibraryTemplate extends Component {
  render() {

    const { footer, header } = styles;

    return (
      <Container>
        <Header style={header} />
        <Content>
          {this.props.children}
        </Content>
        <Footer style={footer}>
          <IconButton name={"basketball"} onPress={this.props.onPressData} />
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent'
  },
  header: {
    backgroundColor: 'white'
  }
});

export default LibraryTemplate;
