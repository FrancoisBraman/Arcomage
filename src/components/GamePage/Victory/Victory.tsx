import './styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import winVideo from '../../../assets/background/Win.mp4';

function Victory () {
  // Victory conditions
    const winner = useSelector((state: RootState) => state.game.victory);
    let content;
    
    switch (winner) {
        case 'player':
            content = (
                <video autoPlay muted>
                    <source src={winVideo} type="video/mp4" />
                </video>
            )
            console.log('Player Win!');
            break;
        case 'cpu':
            console.log('Cpu Win');
            content = <p className='ending_message'>You loose!</p>;
            break;
        case 'tie':
            console.log('Equality');
            content = <p className='ending_message'>Draw!</p>
            break;
        default:
            console.log(`Sorry, we are out of ${winner}.`);
    }


    return(
        <div className="victory_container">{content}</div>
    )
}

export default Victory;