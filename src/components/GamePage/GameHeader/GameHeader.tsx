import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import './styles.scss';

function GameHeader() {
  //Display values from the player reducer
  const { update, crypto, virus } = useSelector((state: RootState) => state.playerOne.resources[0]);
  //Display values from the CPU reducer
  //Variables have been renamed to avoid duplicating with those of the player 
  const { update: cpuUpdate, crypto: cpuCrypto, virus: cpuVirus } = useSelector((state: RootState) => state.cpu.resources[0]);
  //Get if the game has already started to display the data
  const gameStarted = useSelector((state: RootState) => state.game.gameStarted);

  return (
    <div className="game_header">
      {/* box 1 */}
      <div className="player-side">
        {/*//? Il y a sans doute moyen de refactoriser ici ! */}
        <div className="logo-container">
          <div className="logo logo-update">
            <h2>{gameStarted ? (update.stock) : ("-")}/{gameStarted ? (update.generator) : ("-")}</h2>
          </div>
          <div className="logo logo-crypto">
            <h2>{gameStarted ? (crypto.stock) : ("-")}/{gameStarted ? (crypto.generator) : ("-")}</h2>
          </div>
          <div className="logo logo-virus">
            <h2>{gameStarted ? (virus.stock) : ("-")}/{gameStarted ? (virus.generator) : ("-")}</h2>
          </div>
        </div>
      </div>

      {/* box 2 */}

      <div className='foe_container'>
        <ul className="foe-cards-side">
          <li className="foe-cards" ></li>
          <li className="foe-cards" ></li>
          <li className="foe-cards" ></li>
          <li className="foe-cards" ></li>
          <li className="foe-cards" ></li>
          <li className="foe-cards" ></li>
        </ul>
      </div>

      {/* box 3 */}

      <div className="foe-side">
        <div className="logo-container">
          <div className="logo logo-virus">
            <h2>{gameStarted ? (cpuVirus.stock) : ("-")}/{gameStarted ? (cpuVirus.generator) : ("-")}</h2>
          </div>
          <div className="logo logo-crypto">
            <h2>{gameStarted ? (cpuCrypto.stock) : ("-")}/{gameStarted ? (cpuCrypto.generator) : ("-")}</h2>
          </div>
          <div className="logo logo-update">
            <h2>{gameStarted ? (cpuUpdate.stock) : ("-")}/{gameStarted ? (cpuUpdate.generator) : ("-")}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameHeader;
