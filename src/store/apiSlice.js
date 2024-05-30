import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'


const baseUrl ='https://api.auvnet.com'

const baseQuery = fetchBaseQuery({ baseUrl })

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['Projects','Tracking','ChatBot'],
	endpoints: (builder) => ({}),
})
