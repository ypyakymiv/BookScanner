import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, CardItem, Left, Right, Body, Text } from 'native-base';


class BookList extends Component {

  _renderItem = ({item, index}) => {
    return (
      <Card>
        <CardItem header>
          <Left>
            <Text>
              {item.title||"Unspecified"}
            </Text>
          </Left>
          <Body />
          <Right>
            <Text>
              {item.isbn}
            </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
        {...this.props}
      />
    );
  }
}

export default BookList;
