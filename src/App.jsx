import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Comics from './components/Comics';

import './stylesheets/styles.css';

const App = props => {
    return (
        <div className="router">
            <main>
                <Route
                    exact
                    path="/"
                    component={Comics}
                />
            </main>
        </div>
    );
};

export default App;