import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';


class App extends Component {

    render() {
        return (
            <div className='app'>
                <h1>HELLO REACT</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
