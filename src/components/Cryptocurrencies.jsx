import React, {useState} from 'react'
import { Link } from "react-router-dom"
import millify from 'millify'

import { Card, Row, Col, Input } from "antd"

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
    const {data:cryptosList, isfetching} = useGetCryptosQuery()
    const [cryptos,setCryptos] = useState(cryptosList?.data?.coins)
        console.log(cryptos)
    
    return (
        <div>
           <h1>Cryptocurrencies Page</h1> 
        </div>
    )
}

export default Cryptocurrencies
