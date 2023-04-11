import React from 'react'
import Header from '../components/Header'
import Poster from '../components/Poster'
import CoinsTable from '../components/CoinsTable'


export default function CryptoCurrency() {
    return (
        <div className='crypto-page'>
            <Header/>
            <Poster/>
            <CoinsTable/>
        </div>
    )
}
