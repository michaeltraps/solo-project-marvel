import React, { Component } from 'react';
import FeedItem from './FeedItem';

class Feed extends Component {

  constructor() {
    super();
    this.state = { comic: [] };
  }

  componentDidMount() {
    fetch(this.props.feedUrl)
      .then(res => res.json())
      .then((result) => {
          this.setState({ comic: result.data.results[0].images[0].path+'.jpg'});
        })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }

  render() { 
    return (
      <div id='feed'>
        <FeedItem comicImage={this.state.comic} />   
      </div>);
  }
}

export default Feed;