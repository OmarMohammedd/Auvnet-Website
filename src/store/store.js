import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
// @ts-ignore
// import chatBotSlice from './chatBoot/ChatBotApiSlice'

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		// chatBot:chatBotSlice

	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
})

export default store
