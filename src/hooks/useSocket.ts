import { useSelector } from 'react-redux';
import socketioMiddleware from '../middleWares/socketioMiddleware';
import type  { RootState } from '@/store';
import type { Socket } from 'socket.io-client';
import type { Dispatch } from 'redux';

const useSocket = () => {
  const { socket } = useSelector((state: RootState) => state.socket);
  const socketId = socket?.id
  

  const discardCard = (cardId:number) => {
    // Emit: j'envoie une info
    socket?.emit('discard',socketId, cardId);
  };

  const playedCard = (cardId:number) => {
    // Emit: j'envoie une info
    socket?.emit('play',socketId, cardId);
    
  };

  const initMiddleware = (socket: Socket, dispatch: Dispatch) => {
    socketioMiddleware(socket, dispatch);
  };

  return {
    discardCard,
    playedCard,
    initMiddleware,
  };
};

export default useSocket;
