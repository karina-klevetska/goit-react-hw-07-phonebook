import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { contactFilter } from './contacts/reducers'
import slicedContacts from './contacts/reducers'

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// }

const contactReducer = combineReducers({
  contacts: slicedContacts,
  filter: contactFilter,
})

// const persistedContactReducer = persistReducer(persistConfig, contactReducer)

export const store = configureStore({
  reducer: contactReducer,

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),

  // devTools: process.env.NODE_ENV === 'development',
})

// export const persistor = persistStore(store)
