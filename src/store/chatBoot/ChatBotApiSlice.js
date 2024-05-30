import { apiSlice } from '../apiSlice'
const CHATBOT_URL = '/chatBot'
export const chatBotApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
	
		createService: builder.mutation({
			query: ({ data }) => ({
				url: `${CHATBOT_URL}/sendService`,
				method: 'POST',
				body: data,
			}),
		}),
		sendContact: builder.mutation({
			query: ({ data }) => ({
				url: `${CHATBOT_URL}/sendContact`,
				method: 'POST',
				body: data,
			}),
		}),
		sendCourse: builder.mutation({
			query: ({ data }) => ({
				url: `${CHATBOT_URL}/sendCourse`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
})
export const {
	useCreateServiceMutation,
	useSendContactMutation ,
	useSendCourseMutation
} = chatBotApiSlice
