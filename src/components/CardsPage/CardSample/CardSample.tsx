import type { CardInterface } from "@/interfaces";
import updateIcon from "@/assets/logo/update.webp";
import cryptoIcon from "@/assets/logo/crypto.webp";
import virusIcon from "@/assets/logo/virus.webp";

// The disableButton property is optionnal
function CardSample(props: CardInterface & { disableButton?: boolean, onGameMain?: boolean, className?:string }) {
  //!Card ClassName
  // If a card is playable in fonction of the player's resources cardIsPlayable = true
  // If onGameMain = true, the card component is mounted in the GameMain component
  //ClassName variables 
  const cardClass = 'card';
  const glowboxClass = 'glowbox';
  const typeClass = props.type;


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
      className={`${cardClass} ${glowboxClass} ${typeClass} playable`}
      disabled={props.disableButton}
    >
      <div className="card_container">
        <div className="card_name blanc">{props.name}</div>

        <img className="card_image" src={"data:image/webp;base64," + props.image} alt="" />

        <div className="card_effect blanc">
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

export default CardSample;
