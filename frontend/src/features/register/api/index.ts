import { baseApi } from "@/shared/api/base";
import { TAuthResponse } from "@/shared/model/types/base";
import { TRegisterFormData } from "../model/schema";

export const registerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<TAuthResponse, Omit<TRegisterFormData, "confirmPassword">>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.access_token);
        } catch (error) {
          console.error("Login failed", error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
