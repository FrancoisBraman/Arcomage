import { useDispatch, useSelector } from "react-redux";
import { setTurnInProgress } from "@/reducers/game";
import useSocket from '../../hooks/useSocket';
import type { CardInterface } from "@/interfaces";
import type React from "react";
import type { RootState } from "@/store";
import "./styles.scss";
import updateIcon from "../../assets/logo/update.webp";
import cryptoIcon from "../../assets/logo/crypto.webp";
import virusIcon from "../../assets/logo/virus.webp";

// The disableButton property is optionnal
function Card(props: CardInterface & { disableButton?: boolean, onGameMain?: boolean, className?:string }) {
  
  const dispatch = useDispatch();
  const { discardCard, playedCard } = useSocket();
  const isTurnInProgress = useSelector(({game}: RootState) => game.isTurnInProgress);
  
  // left click on card in the hand (to play a card)
  const handleCardClick = () => {
    playedCard(props.id);
    dispatch(setTurnInProgress());
  };

  //For TypeScript, The type of the "event" is MouseEvent
  const handleCardRightClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!isTurnInProgress) {
      discardCard(props.id);
      dispatch(setTurnInProgress()); 
    }
  }

  //!Card ClassName
  // If a card is playable in fonction of the player's resources cardIsPlayable = true
  const resourcesStock = useSelector((state: RootState) => state.playerOne.resources[0]?.[props.type]?.stock)
  const cardIsPlayable = resourcesStock >= props.cost;
  // If onGameMain = true, the card component is mounted in the GameMain component
  const onGameMain = props.onGameMain;
  //ClassName variables 
  const cardClass = 'card';
  const glowboxClass = 'glowbox';
  const typeClass = props.type;
  let playableClass = '';
  // If onGameMain = true, the unplayable and playable className are not assignable
  if (!onGameMain) {
    playableClass = cardIsPlayable ? 'playable' : 'unplayable';
  }

  switch (props.type) {
    case 'update':
      var typeIcon = updateIcon;
      break;
    case 'crypto':
      var typeIcon = cryptoIcon;
      break;
    case 'virus':
      var typeIcon = virusIcon;
      break;
    default:
      var typeIcon = updateIcon;
  }

  return (
    <button 
      className={`${cardClass} ${glowboxClass} ${typeClass} ${playableClass}`}
      onClick={cardIsPlayable ? handleCardClick : undefined}
      onContextMenu={handleCardRightClick}
      disabled={props.disableButton}
    >
      <div className="card_container">
        <div className="card_name">{props.name}</div>

        <img className="card_image" src={"data:image/webp;base64," + props.image} alt="" />

        <div className="card_effect">
          <strong>EFFECT:</strong>
          <span className="glow text">{props.desc}</span>
        </div>
      </div>
      <div className="card_cost">
        <div className="card_cost_nb glow text">{props.cost}</div>
        <img className="card_cost_type" src={typeIcon} alt={props.type}/>
      </div>
    </button>
  );
}

export default Card;
