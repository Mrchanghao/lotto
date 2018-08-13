import React, { Component } from 'react';
import './App.css'
// import LottoContainer from './container/lottoContainer'
import LottoNumber from '../component/LottoNumber.js';

class App extends Component {
    state = {
        min: 1,
        max: 45,
        num: 6,
        result: [0, 0, 0, 0, 0, 0],
        show: false
    }

    randomNumber(min, max, num) {
        let arr = []
        for(let i = 0; i < num; i++) {
            let random = Math.random() * (max - min) + min;
            while(arr.indexOf(Math.round(random)) > -1) {
                random = Math.random() * (max - min) + min;
            }
            arr[i] = Math.round(random);
        }
        let sortedArr =  arr.sort((a, b) => {
            return a - b
        })
        this.setState({
            result: [...sortedArr]
        })

    }

    


    reset(result) {
        this.setState({
            result: [...result]
        })
    }

    render() {
        const {result, min, max, num} = this.state;
        return (
            <div className='app'>
                <h1>로또 추첨기</h1>
                <button 
                className='btn btn-random'
                onClick={() => this.randomNumber(min, max, num)}>
                    번호추천
                </button>
                <button 
                className='btn btn-reset'
                onClick={() => this.reset([0,0,0,0,0,0])}>
                    reset
                </button>
                <div className='lotto__number'>  
                    {result.map((item, i) => <LottoNumber key={i} number={item} />)}
                </div>
            </div>
        );
    }
}

export default App;