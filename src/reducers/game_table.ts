import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInterface } from "@/interfaces";

//Interfaces for TypeScript
interface GameTableState {
  playedCard: CardInterface | null;
  deck: CardInterface[];
}

//Slice Redux Toolkit
const gameTableSlice = createSlice({
  name: "gameTable",
  initialState: {
    playedCard:null,
    deck: [],//! ici les cartes aléatoire


  } as GameTableState, //TypeScript

  reducers: {
    setPlayedCard: (state, action: PayloadAction<CardInterface | null>) => {
        state.playedCard = action.payload
    },
    cardFromDeck: (state, action) => {
      state.deck[0] = action.payload
    }
  },
});

export const { setPlayedCard, cardFromDeck } = gameTableSlice.actions;
export default gameTableSlice.reducer;