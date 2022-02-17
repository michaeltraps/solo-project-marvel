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
    // const feedItems = [];
    // for (let i = 0; i < this.state.comic.length; i++) {
    //   feedItems.push(<FeedItem key={i} url={this.state.comic} />);
    // }
    return (
      <div style={styles.container} id='feed'>
          {/* {this.state.comic}   */}
        <FeedItem comicImage={this.state.comic} />   
      </div>);
  }
}

const styles = {
  container: {
    border: '1px black solid',
    width: '75%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

export default Feed;