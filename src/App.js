import React, { Component } from 'react';
import './style/App.css'
import LottoContainer from './container/lottoContainer'

class App extends Component {
    
    render() {
        return (
            <div className='app'>
                <LottoContainer />
            </div>
        );
    }
}

export default App;