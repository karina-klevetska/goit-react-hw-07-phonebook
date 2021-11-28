import { createReducer, createSlice } from '@reduxjs/toolkit'
import { filterValue } from './actions'
import { fetchContacts, addContact, deleteContact } from './operations'

// export const contactsList = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// })

export const contactFilter = createReducer('', {
  [filterValue]: (_, { payload }) => payload,
})

// export const contacts = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// })

// export const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// })

// export const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
//   [fetchContacts.fulfilled]: () => null,
//   [addContact.rejected]: (_, { payload }) => payload,
//   [addContact.pending]: () => null,
//   [addContact.fulfilled]: () => null,
//   [deleteContact.rejected]: (_, { payload }) => payload,
//   [deleteContact.pending]: () => null,
//   [deleteContact.fulfilled]: () => null,
// })

const slicedContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, ...payload],
      }
    },
    [fetchContacts.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      }
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, payload],
      }
    },
    [addContact.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    [addContact.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      }
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      }
    },
    [deleteContact.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    [deleteContact.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      }
    },
  },
})

export default slicedContacts.reducer
