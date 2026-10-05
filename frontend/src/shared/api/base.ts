import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../consts/api";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("authentication", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Task", "Category"],
  endpoints: () => ({}),
});
