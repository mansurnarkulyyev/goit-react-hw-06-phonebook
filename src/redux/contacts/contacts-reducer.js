import { addContact, removeContact, setContacts } from './contacts-action';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
 

import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers} from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const contactsReducer = combineReducers(
const contactsReducer = createReducer(
  JSON.parse(localStorage.getItem('contacts')) || [],
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [removeContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
    [setContacts]: (_, { payload }) => payload,
  }
);

// const persistedReducer = persistReducer(persistConfig,contactsReducer)

// export default persistedReducer;
export default contactsReducer;