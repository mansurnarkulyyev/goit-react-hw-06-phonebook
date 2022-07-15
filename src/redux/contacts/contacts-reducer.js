import { addContact, removeContact, setContacts } from './contacts-action';

import { createReducer } from '@reduxjs/toolkit';

const contactsReducer = createReducer(
  JSON.parse(localStorage.getItem('contacts')) || [],
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [removeContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
    [setContacts]: (_, { payload }) => payload,
  }
);

export default contactsReducer;