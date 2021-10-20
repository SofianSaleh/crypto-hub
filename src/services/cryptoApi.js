import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '0fb411416fmsh69a504b679a6d70p108599jsn51876786827d',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({url, headers: cryptoApiHeaders})

export default cryptoApi; = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder)=>({
        getCryptos : builder.query({
            query: ()=>createRequest('/exchanges')
        })
    })
})

// var options = {
//   method: 'GET',
//   url: ,
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '0fb411416fmsh69a504b679a6d70p108599jsn51876786827d'
//   }
// };
