import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from 'redux/contacts/operations'
import { getFilteredContacts } from 'redux/contacts/selectors'
import { useEffect } from 'react'
import { fetchContacts } from 'redux/contacts/operations'
import { Loader } from 'Components/Loader/Loader'
import './ContactItem.css'

const ContactItem = () => {
  const contactsList = useSelector(getFilteredContacts)
  const isLoading = useSelector((state) => state.contacts.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      {isLoading && <Loader />}
      {contactsList.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type='button'
            className='delete-button'
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  )
}

export default ContactItem
