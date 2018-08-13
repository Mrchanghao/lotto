import React from 'react'
import './LottoNumber.css';
import Spin from 'react-reveal/Spin';


const LottoNumber = ({number}) => {
    return (
        <Spin spy={number}>
            <div className='random__number'>
                {number}
            </div>
        </Spin>
            
    )
};

export default LottoNumber

