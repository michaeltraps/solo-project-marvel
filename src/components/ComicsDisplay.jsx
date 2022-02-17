import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FeedItem from './FeedItem';

class Comics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: [],
            images: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/title', {
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                return this.setState({ titles: data });
            })
            .catch(err => console.log(`Comics.componentDidMount: get titles: ERROR: `, err));
    }

    componentDidMount() {
        fetch('http://localhost:3000/image', {
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                return this.setState({ images: data });
            })
            .catch(err => console.log(`Comics.componentDidMount: get characters: ERROR: `, err));
    }

    render() {
        const comicFeed = [];
        const titleFeed = [];
        for (let i = 0; i < this.state.images.length; i++) {
            // comicFeed.push(this.state.comics[i]);
            comicFeed.push(<FeedItem image={this.state.images[i].image} />)
        }
        for (let i = 0; i < this.state.titles.length; i++) {
            titleFeed.push(<FeedItem title={this.state.titles[i].title} />)
        }
        return (
            <div>
                {comicFeed}
            </div>
        )
    }
}

export default Comics;