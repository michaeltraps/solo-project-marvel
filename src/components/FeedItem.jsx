import React, { Component } from 'react';

class FeedItem extends Component {

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="feedItem">
                {this.props.title}
                <img src={this.props.image}></img>
            </div>
        )
    }
}

export default FeedItem;