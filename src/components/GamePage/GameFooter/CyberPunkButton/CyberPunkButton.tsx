import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from '@/reducers/game';
import { cardFromDeck } from "@/reducers/game_table";
import { addCardToHand } from "@/reducers/player_one";
import type { RootState } from '@/store';

const CyberPunkButton = () => {
    const dispatch= useDispatch();
    const playerHand = useSelector((state:RootState) => state.playerOne.hand);
    const deck = useSelector((state:RootState) => state.gameTable.deck[0]);

    // start a Game 
    const handleStartClick = () => {
        dispatch(startGame());
        if(playerHand.length < 6){
            const card = cardFromDeck(deck)
            dispatch(addCardToHand(card.payload))      
        }
    }


    return (
        <button className ="btn" onClick={handleStartClick}>
            <span className ="btn__content">Play_</span>
            <span className ="btn__glitch"></span>
            <span className ="btn__label">V0.1</span>
        </button>
    )
};

export default CyberPunkButton;