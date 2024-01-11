import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Socket } from "socket.io-client";

//Interfaces for TypeScript
interface SocketState {
  socket: Socket | null;
}

//Slice Redux Toolkit
const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
  }as SocketState,

  reducers: {
    setSocket: (state, action: PayloadAction<Socket | null>) => {
      // @ts-ignore // TODO: Trouver pourquoi le typage pose souci, sachant qu'il est théoriquement respecté
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = socketSlice.actions;
export default socketSlice.reducer;
