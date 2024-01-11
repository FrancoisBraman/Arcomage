import { CardInterface } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/' }),
  endpoints: (builder) => ({
    getCards: builder.query<Array<CardInterface>, void>({
      query: () => 'cards',
    }),
    getOneCard: builder.query({
      query: (id) => `cards/${id}`,
    }),
  }),
});

export const { useGetCardsQuery, useGetOneCardQuery } = cardApi;