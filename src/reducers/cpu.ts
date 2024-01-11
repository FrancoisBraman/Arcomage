import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ResourceInterface } from "@/interfaces";

//Interfaces for TypeScript
interface CpuState {
  name: string;
  resources: ResourceInterface[];
  data_center: number;
  damageToDataCenter: number 
  healToDataCenter: number 
  data_centerCurrentPv: number;

}

interface InitCpuPayload {
  update: number;
  software: number;
  crypto: number;
  dataMiner: number;
  virus: number;
  hacker: number;
  dataCenter: number;
}

//Slice Redux Toolkit
const cpuSlice = createSlice({
  name: "cpu",
  initialState: {
    name: "Cpu",
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
  } as CpuState, //TypeScript

  reducers: {
    setCpuData: (state, action: PayloadAction<InitCpuPayload>) => {
      const { update, software, crypto, dataMiner, virus, hacker, dataCenter } = action.payload;
      state.resources[0].update.stock = update;
      state.resources[0].update.generator = software;
      state.resources[0].crypto.stock = crypto;
      state.resources[0].crypto.generator = dataMiner;
      state.resources[0].virus.stock = virus;
      state.resources[0].virus.generator = hacker;
      state.data_center = dataCenter;   
    },
    initCpuData_CenterCurrentPv: (state, action) => {
      state.data_centerCurrentPv = action.payload;
    },

    displayCpuDataCenterDamage: (state) => {
      const oldPv = state.data_centerCurrentPv;
      const newPv = state.data_center;
      const damage = oldPv-newPv;
      if (damage > 0) {
        state.data_centerCurrentPv = newPv;
        state.damageToDataCenter = damage;
      }
    },
    displayCpuDataCenterHeal: (state) => {
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

export const { setCpuData, displayCpuDataCenterDamage, initCpuData_CenterCurrentPv, displayCpuDataCenterHeal } = cpuSlice.actions;

export default cpuSlice.reducer;