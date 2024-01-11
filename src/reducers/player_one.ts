import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResourceInterface, CardInterface } from "@/interfaces";

//Interfaces for TypeScript
interface PlayerOneState {
  name: string;
  hand: CardInterface[];
  resources: ResourceInterface[];
  damageToDataCenter: number 
  healToDataCenter: number 
  data_center: number;
  data_centerCurrentPv: number;
}

interface InitPlayerOnePayload {
  // hand: CardInterface[];
  update: number;
  software: number;
  crypto: number;
  dataMiner: number;
  virus: number;
  hacker: number;
  dataCenter: number;
}

//Slice Redux Toolkit
const playerOneSlice = createSlice({
  name: "playerOne",
  initialState: {
    name: "ShonenAlex",
    hand: [],
    damageToDataCenter: 0,
    healToDataCenter:0,
    resources: [{
      update: {
        stock: 0, 
        generator: 0,
      },
      crypto: {
        stock: 0, 
        generator: 0,
      },
      virus: {
        stock: 0, 
        generator: 0,
      },
    }],
    data_center: 0,
    data_centerCurrentPv: 0,
  } as PlayerOneState, //TypeScript

  reducers: {
    
    deleteClickedCard: (state, action: PayloadAction<number>) => {
      const cardIdToDelete = action.payload;
      state.hand = state.hand.filter((card) => card.id !== cardIdToDelete);
    },
    addCardToHand:(state, action) => {
      state.hand.push(action.payload)
    },    
    
    //! Resources
    setPlayerData: (state, action: PayloadAction<InitPlayerOnePayload>) => {
      const { update, software, crypto, dataMiner, virus, hacker, dataCenter } = action.payload; 
      
      state.data_center = dataCenter;
      state.resources[0].crypto.stock = crypto;
      state.resources[0].crypto.generator = dataMiner;
      state.resources[0].virus.generator = hacker;
      state.resources[0].virus.stock = virus;
      state.resources[0].update.generator = software;
      state.resources[0].update.stock = update;
    },
    initPlayerOneData_CenterCurrentPv: (state, action) => {
      state.data_centerCurrentPv = action.payload;
    },
    setPlayerOneHand: (state, action) => {
      state.hand = action.payload
    },

    displayPlayerOneDataCenterDamage: (state) => {
      const oldPv = state.data_centerCurrentPv;
      const newPv = state.data_center;
      const damage = oldPv-newPv;
      if (damage > 0) {
        state.data_centerCurrentPv = newPv;
        state.damageToDataCenter = damage;
      }
    },
    displayPlayerOneDataCenterHeal: (state) => {
      const oldPv = state.data_centerCurrentPv;
      const newPv = state.data_center;
      const heal = newPv-oldPv;
      if (heal > 0) {
        state.data_centerCurrentPv = newPv;
        state.healToDataCenter = heal;
      }
    } 
  },
});

export const { 
  deleteClickedCard, 
  addCardToHand,
  setPlayerData,
  setPlayerOneHand,
  displayPlayerOneDataCenterDamage,
  displayPlayerOneDataCenterHeal,
  initPlayerOneData_CenterCurrentPv,

} = playerOneSlice.actions;

export default playerOneSlice.reducer;