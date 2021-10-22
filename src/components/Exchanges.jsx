import React from 'react'

import { useGetExchangesQuery } from '../services/cryptoApi'
import Loader from 'Loader'

const Exchanges = () => {
const {data, isFetching} = useGetExchangesQuery()

console.log(data)

if(isFetching) return <Loader />

  return (
        <div>
          <h1>Exchanges Page</h1>  
        </div>
    )
}

export default Exchanges
