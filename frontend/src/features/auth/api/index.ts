import { baseApi } from "@/shared/api/base";
import type { IUser } from "@/shared/model/types/user";
import type { TLoginFormData } from "../model/schema";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IUser & { token: string }, TLoginFormData>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.token);
        } catch (error) {
          console.error("Login failed", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
