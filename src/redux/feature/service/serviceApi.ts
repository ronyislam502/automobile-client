import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: (userInfo) => ({
        url: "/services",
        method: "GET",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetAllServicesQuery } = serviceApi;
