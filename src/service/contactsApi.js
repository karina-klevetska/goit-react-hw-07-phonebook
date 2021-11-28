import axios from 'axios'

const BASE_URL = 'https://61a36bfbd5e8330017291ff2.mockapi.io/api/v1/'

export const fetchContacts = async () => {
  let { data } = await axios.get(`${BASE_URL}/contacts`)
  return data.sort((a, b) => a.name.localeCompare(b.name))
}

export const addContact = async (contact) => {
  let { data } = await axios.post(`${BASE_URL}/contacts`, contact)
  return data
}

export const deleteContact = async (id) => {
  await axios.delete(`${BASE_URL}/contacts/${id}`)
  return id
}
