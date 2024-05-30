import { apiSlice } from "../apiSlice";
const CHATBOT_URL = "/project";
export const chatBotApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImgs: builder.mutation({
      query: ({ data, token }) => ({
        url: `${CHATBOT_URL}/uploadImages`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
    createProject: builder.mutation({
      query: ({ data, token }) => ({
        url: `${CHATBOT_URL}/createProject`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
    updateProject: builder.mutation({
      query: ({ data, token, id }) => ({
        url: `${CHATBOT_URL}/updateProject?_id=${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
    deleteProject: builder.mutation({
      query: ({ token, id }) => ({
        url: `${CHATBOT_URL}/deleteProject?_id=${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteProjectImgs: builder.mutation({
      query: ({ data, token }) => ({
        url: `${CHATBOT_URL}/deleteImages`,
        method: "DELETE",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getProject: builder.query({
      query: ({ name }) => ({
        url: `${CHATBOT_URL}/getProject?namespace=${name}`,
        method: "GET",
      }),
    }),
    getAllProjects: builder.query({
      query: () => ({
        url: `${CHATBOT_URL}/getAllProjects`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreateProjectMutation,
  useGetAllProjectsQuery,
  useUpdateProjectMutation,
  useDeleteProjectImgsMutation,
  useDeleteProjectMutation,
  useUploadImgsMutation,
  useGetProjectQuery,
} = chatBotApiSlice;
