import { apiSlice } from "../apiSlice";
const CHATBOT_URL = "/tracking";

export const trackingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    coursesTracking: builder.mutation({
      query: (data) => ({
        url: `${CHATBOT_URL}/setCoursesTracking`,
        method: "POST",
        body: data,
      }),
    }),
    servicesTracking: builder.mutation({
      query: (data) => ({
        url: `${CHATBOT_URL}/setServicesTracking`,
        method: "POST",
        body: data,
      }),
    }),
    projectsTracking: builder.mutation({
      query: (data) => ({
        url: `${CHATBOT_URL}/setProjectsTracking`,
        method: "POST",
        body: data,
      }),
    }),
    websiteTracking: builder.mutation({
      query: (data) => ({
        url: `${CHATBOT_URL}/setWebsiteTracking`,
        method: "POST",
        body: data,
      }),
    }),
    getTracking: builder.mutation({
      query: ({ token, from, to }) => ({
        url: `${CHATBOT_URL}/getTracking?from=${from}&to=${to}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCoursesTrackingMutation,
  useServicesTrackingMutation,
  useProjectsTrackingMutation,
  useWebsiteTrackingMutation,
  useGetTrackingMutation,
} = trackingApiSlice;
