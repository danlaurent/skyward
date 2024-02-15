import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Launch } from "./types";

export const spaceXApi = createApi({
  reducerPath: "spaceXApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v3/" }),
  tagTypes: ["PastLaunch", "OneLaunch"],
  endpoints: (builder) => ({
    getPastLaunches: builder.query<Launch[], null>({
      query: () => "launches/past?order=desc&sort=launch_date_utc",
      providesTags: ["PastLaunch"],
    }),
    getOneLaunch: builder.query<Launch, string | string[] | undefined>({
      query: (flightNumber) => `launches/${flightNumber}`,
      providesTags: ["OneLaunch"],
    }),
  }),
});

export const { useGetPastLaunchesQuery, useGetOneLaunchQuery } = spaceXApi;
