import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// type
import {
  IuserSignupResponse,
  IuserLoginResponse,
} from "../../../types/ResponseInterface";
import {
  userSignupPayload,
  userLoginPayload,
} from "../../../types/payloadInterface";

const baseUrl = "http://localhost:4000/api";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const userTokenString = localStorage.getItem("userToken");
    const adminTokenString = localStorage.getItem("adminToken");

    type token = {
      token: string;
    };

    if (userTokenString) {
      const userTokenObject: token | null = userTokenString
        ? JSON.parse(userTokenString)
        : null;
      if (userTokenObject?.token) {
        headers.set("authorization", `Bearer ${userTokenObject?.token}`);
      }
    } else if (adminTokenString) {
      const adminTokenObject: token | null = adminTokenString
        ? JSON.parse(adminTokenString)
        : null;
      if (adminTokenObject?.token) {
        headers.set("authorization", `Bearer ${adminTokenObject?.token}`);
      }
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["user", "admin"],
  endpoints: (builder) => ({
    userSignup: builder.mutation<IuserSignupResponse, userSignupPayload>({
      query: (data) => ({
        url: "/auth/user-signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: builder.mutation<IuserLoginResponse, userLoginPayload>({
      query: (data) => ({
        url: "/auth/user-login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userSuggestionList: builder.mutation<any, number>({
      query: (data) => ({
        url: "/user/user-friendsuggestion",
        method: "POST",
        body: data,
      }),
    }),
    Useraddfriend: builder.mutation<any, object>({
      query: (data) => ({
        url: "/user/user-addfriend",
        method: "POST",
        body: data,
      }),
    }),
    userFriendRequestList: builder.mutation<any, number>({
      query: (data) => ({
        url: "/user/user-friendrequestlist",
        method: "POST",
        body: data,
      }),
    }),
    userAcceptRequest: builder.mutation<any, object>({
      query: (data) => ({
        url: "/user/user-acceptfriend",
        method: "POST",
        body: data,
      }),
    }),
    userRejectRequest: builder.mutation<any, object>({
      query: (data) => ({
        url: "/user/user-rejectfriend",
        method: "POST",
        body: data,
      }),
    }),
    userEditProfileDetails: builder.mutation<any, any>({
      query: (data) => ({
        url: "/user/user-editprofile",
        method: "POST",
        body: data,
      }),
    }),

    userAddPost: builder.mutation<any, any>({
      query: (data) => ({
        url: "/user/user-addpost",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  // mutation and querry
  useUserSignupMutation,
  useUserLoginMutation,
  useUserSuggestionListMutation,
  useUseraddfriendMutation,
  useUserFriendRequestListMutation,
  useUserAcceptRequestMutation,
  useUserRejectRequestMutation,
  useUserEditProfileDetailsMutation,
  useUserAddPostMutation,
} = apiSlice;
