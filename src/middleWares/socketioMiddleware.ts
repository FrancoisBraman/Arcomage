import {deleteClickedCard, setPlayerData, initPlayerOneData_CenterCurrentPv, displayPlayerOneDataCenterDamage, setPlayerOneHand, displayPlayerOneDataCenterHeal} from '../reducers/player_one';
import { displayCpuDataCenterDamage, displayCpuDataCenterHeal, initCpuData_CenterCurrentPv, setCpuData } from '../reducers/cpu';
import { setWinner } from '../reducers/game';
import type { Socket } from 'socket.io-client';
import type { Dispatch } from 'redux';
import { cardFromDeck, setPlayedCard } from '@/reducers/game_table';
import { setTurnInProgress } from '@/reducers/game';

const socketioMiddleware = (socket: Socket, dispatch: Dispatch) => {

  // On => Listen to.
  socket.on('connect', () => console.log('Socket.IO connected'));

  socket.on('disconnect', () => console.log('Socket.IO disconnected'));

  socket.on('message', () => console.log('Socket.IO message received'));

  socket.on('init', (initData) => {
    //! Player INIT
    console.log(initData);
    
    //Get the data of the player for the init (with socket Io)
    const playerInitData = initData.game.queue[0];
    //We dispatch the initPlayer method (from the player_one reducer)
    dispatch(setPlayerData(playerInitData));
    //We dispatch the cards of the player hand
    dispatch(setPlayerOneHand(initData.game.queue[0].hand));
    //For the damages an the heals calculs  
    dispatch(initPlayerOneData_CenterCurrentPv(initData.game.queue[0].dataCenter));
    //We dispatch the new card from the deck 
    dispatch(cardFromDeck(initData.pickedCard));

    //! CPU INIT
    //Get the data of the CPU for the init (with socket Io)
    const cpuInitData = initData.game.queue[1];
    //We dispatch the initCpuData method (from the cpu reducer)
    dispatch(setCpuData(cpuInitData));
    //For the damages an the heals calculs  
    dispatch(initCpuData_CenterCurrentPv(initData.game.queue[1].dataCenter));
  });

  //! Player Turn
  socket.on('play confirm', (playCardConfirm) => {
    console.log(playCardConfirm);
    
    //Send the clicked card to the gametable component  
    dispatch(setPlayedCard(playCardConfirm.playedCard));
    //Delete card from the hand 
    dispatch(deleteClickedCard(playCardConfirm.playedCard.id));
    //Get the data of the player after the resolution of card effects and dispatch to the player_one reducer (Pv heal, up resources ect) 
    dispatch(setPlayerData(playCardConfirm.game.queue[1]));
    //Display the Heals or/and the damages values.
    dispatch(displayPlayerOneDataCenterDamage())
    dispatch(displayPlayerOneDataCenterHeal())
    //Get the data of the CPU after the resolution of card effects and dispatch to the Cpu reducer (damages ect)
    dispatch(setCpuData(playCardConfirm.game.queue[0]));
    //Display the Heals or/and the damages values.
    dispatch(displayCpuDataCenterDamage());
    dispatch(displayCpuDataCenterHeal());
  });

  //! Delete a card
  socket.on('discard confirm', (discardConfirm) => {
    //Delete card from the hand 
    dispatch(deleteClickedCard(discardConfirm.discardedCard.id));
  })

  //! CPU TURN
  socket.on('round', (round) => {
    console.log(round);
    
    //"SetTimeOut" can execute methods step by step with a time setting.
    setTimeout(() => {
      //Send the cpu played card to the gametable component
      dispatch(setPlayedCard(round.cpuAction.card));
      //Get the data of the CPU after the resolution of card effects and dispatch to the cpu reducer
      dispatch(setCpuData(round.game.queue[1]));
      //Display the Heals or/and the damages values.
      dispatch(displayCpuDataCenterDamage());
      dispatch(displayCpuDataCenterHeal());
      //Get the data of the player after the resolution of card effects and dispatch to the player_one reducer (damages ect)
      dispatch(setPlayerData(round.game.queue[0]));
      //Display the Heals or/and the damages values.
      dispatch(displayPlayerOneDataCenterDamage());
      dispatch(displayPlayerOneDataCenterHeal());
    }, 3000)
    setTimeout(() => {
      //We dispatch the cards of the player hand + New card from the deck
      dispatch(setPlayerOneHand(round.game.queue[0].hand));
      // End of the Turn
      dispatch(setTurnInProgress());
    }, 5000)
  })

  //! Victory

  socket.on('victory', (victory) => {
    //We dispatch the name of the winner in game reducer.
    setTimeout(()=> {
      dispatch(setWinner(victory));
    }, 3000)
  })
};

export default socketioMiddleware;