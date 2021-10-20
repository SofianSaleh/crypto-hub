import React, {useState} from 'react'
import { Link } from "react-rouer-dom"
import millify from 'millify'

import { Card, Row, Col, Input } from "antd"

import {useGetCrytposQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
    const {data:cryptoList, isfetching} = useGetCrytposQuery()
    const [cryptos,setCryptos] = useState(cryptoList?.data?.coins)
        console.log( cryptos)
    
    return (
        <div>
           <h1>Cryptocurrencies Page</h1> 
        </div>
    )
}

export default Cryptocurrencies
