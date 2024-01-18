import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log('first', process.env.REACT_APP_BASE_URL);
export const chatsApi = createApi({
  reducerPath: 'chatsRtk',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/chats',
  }),
  tagTypes: ['TagChats'],
  endpoints: builder => ({
    getChats: builder.query({
      query: () => `/`,
      providesTags: ['TagChats'],
    }),
    addMessage: builder.mutation({
      query: body => ({
        url: `/add`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TagChats'],
    }),
    deleteMessage: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TagChats'],
    }),

    updateMessage: builder.mutation({
      query: ({ id, value }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: {
          message: value,
        },
      }),
      invalidatesTags: ['TagBike'],
    }),
  }),
});

export const {
  useGetChatsQuery,
  useAddMessageMutation,
  useDeleteMessageMutation,
  useUpdateMessageeMutation,
} = chatsApi;
