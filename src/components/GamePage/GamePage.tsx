import './styles.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSocket } from '../../reducers/socket';
import io from 'socket.io-client';
import GameHeader from './GameHeader/GameHeader';
import GameMain from './GameMain/GameMain';
import GameFooter from './GameFooter/GameFooter';
import Victory from './Victory/Victory';
import useSocket from '../../hooks/useSocket';
import backgroundVideo from '../../assets/background/Background-video-GamePage.webm';


function GamePage() {
  const dispatch = useDispatch();
  const socketHook = useSocket();

  useEffect(() => {
    const socket = io('http://localhost:5500/');
    dispatch(setSocket(socket));

    socketHook.initMiddleware(socket, dispatch);

    return () => {
      // Peut-être supprimer totalement l'instance passée (l'ancien socket) pour éviter que X sockets tournent
      dispatch(setSocket(null));
    };
  }, []);



  return (
    <div className="gamepage_container">
      <video autoPlay loop muted>
        <source src={backgroundVideo} type="video/webm" />
      </video>
      <Victory />
      <GameHeader />
      <GameMain />
      <GameFooter />
    </div>
  )
}

export default GamePage;
