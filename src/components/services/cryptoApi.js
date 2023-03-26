import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// 'X-RapidAPI-Key': '355021ad0amsh4e933f5acf2452cp1eeec1jsnc401f18068ca',
// 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

const cryptoApiHeaders = {
	'X-RapidAPI-Key': '355021ad0amsh4e933f5acf2452cp1eeec1jsnc401f18068ca',
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),

		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),

		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
		}),

		getExchanges: builder.query({
			query: () => createRequest('/exchanges'),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
