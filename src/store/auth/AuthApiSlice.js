import { apiSlice } from '../apiSlice'
const CHATBOT_URL = '/admin'
export const chatBotApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
	
		adminLogin: builder.mutation({
			query: ({ data }) => ({
				url: `${CHATBOT_URL}/login`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
})
export const {
	useAdminLoginMutation,
} = chatBotApiSlice
