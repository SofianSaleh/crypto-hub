import React from 'react'

import { Select, Typography, Card, Avatar, Row, Col} from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"


const { Text, Title } = Typography
const { Option } = Select
const News = ({simplified}) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrencies', count: simplified?10:100 })

    if(!cryptoNews.value) return `Loading ...`
    return (
        <div>
            <h1> News Page </h1>   
        </div>
    )
}

export default News
