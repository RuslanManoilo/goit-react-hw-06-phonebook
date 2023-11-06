import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { contactsReduser } from "./contactsSlice";
import { filterReduser } from "./filterSlice";


const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReduser,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);