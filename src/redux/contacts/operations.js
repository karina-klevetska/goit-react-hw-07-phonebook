import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsApi from 'service/contactsApi'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts()
      return contacts
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await contactsApi.addContact(contact)
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await contactsApi.deleteContact(id)
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
