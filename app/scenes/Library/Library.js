import React, { Component } from 'react';
import LibraryTemplate from './LibraryTemplate';
import BookList from './BookList';

class Library extends Component {
  render() {
    return (
      <LibraryTemplate>
        <BookList data={this.props.data} />
      </LibraryTemplate>
    );
  }
}

export default Library;
