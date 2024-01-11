import { createSlice } from "@reduxjs/toolkit";

interface GameState {
    gameStarted: boolean;
    isTurnInProgress: boolean;
    victory: string ;
}

    //Slice Redux Toolkit
    const gameSlice = createSlice({
        name: "game",
        initialState: {
            gameStarted: false,
            isTurnInProgress: false,
            victory:"",
        } as GameState,  

        reducers: {
            startGame: (state) => {
                state.gameStarted = true;
            },

            setTurnInProgress: (state) => {
                const currentturnState= state.isTurnInProgress
                state.isTurnInProgress= !currentturnState
            },
            setWinner: (state, action ) => {
                const winner = action.payload;
                state.victory = winner;
            },
        },
    });

export const {startGame, setTurnInProgress,setWinner} = gameSlice.actions;
export default gameSlice.reducer;