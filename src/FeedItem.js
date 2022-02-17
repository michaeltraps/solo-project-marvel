import React, { Component } from 'react';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class FeedItem extends Component {

  render() {
    // put render logic here
    // Added onError event if image does not load
    // console.log('hello');
    return (
      <div style={styles.container} className="feedItem">
          {/* {this.state.comic} */}
        <img src={this.props.comicImage}></img>
        {/* <img src={this.props.url} onError={(e) => console.log('Error check: ', e)}></img> */}
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px solid black',
    // height: '75%',
    width: '50%',
    flex: 1,
  },
};

export default FeedItem;