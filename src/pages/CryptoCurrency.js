import React from 'react'
import Poster from '../components/Poster'
import CoinsTable from '../components/CoinsTable'


export default function CryptoCurrency() {
    return (
        <div className='crypto-page'>
            <Poster/>
            <CoinsTable/>
        </div>
    )
}
