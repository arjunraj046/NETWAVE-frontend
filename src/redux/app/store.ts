import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "../features/reducers/userAuthSlice";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import { studentAuthReducer } from "../Features/Reducers/studentAuthSlice";
// import { facultyAuthReducer } from "../Features/Reducers/facultyAuthSlice";
// import logger from 'redux-logger'

// import FrontEndReducer from "../features/reducers/FrontEndReducer"; "../features/reducers/FrontEndReducer"

import { apiSlice } from "../features/api/apiSlice";
import SideBarReducer from "../features/reducers/sidebarSlice";




const persistConfig = {
    key: "root",
    storage,
};

const persistedUserAuthReducer = persistReducer(
    persistConfig,
    userAuthReducer
);


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        userAuth: persistedUserAuthReducer,
        SideBar: SideBarReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         userAuth: userAuthReducer,
//         SideBar: SideBarReducer


//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
// })

// export type State = typeof store;

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch;