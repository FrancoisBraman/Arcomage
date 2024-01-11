import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import playerOneReducer from '../reducers/player_one';
import cpuReducer from '../reducers/cpu';
import gameTableReducer from '../reducers/game_table';
import socketReducer from '../reducers/socket';
import gameReducer from '../reducers/game';
import { cardApi } from "@/Services/cardApi";

const store = configureStore({
  reducer: {
    playerOne: playerOneReducer,
    cpu: cpuReducer,
    gameTable: gameTableReducer,
    socket: socketReducer,
    game: gameReducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(cardApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export default store;

