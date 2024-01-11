import CyberPunkButton from "./CyberPunkButton/CyberPunkButton";
import Card from "@/components/Card/Card";
import { useSelector } from "react-redux";
import type { CardInterface } from "@/interfaces";
import type { RootState } from "@/store";
import "./styles.scss";


function GameFooter() {
  //Get if the Turn is in progress
  const isTurnInProgress = useSelector((state: RootState) => state.game.isTurnInProgress);
  //Get the hand of the player in the playerOne Reducer
  const hand = useSelector((state: RootState) => state.playerOne.hand);
  //Get if the game has already started to display the data
  const gameStarted = useSelector((state: RootState) => state.game.gameStarted);
  return (
    <div className="player_card glowbox">
      {gameStarted ? (
        hand.map((h: CardInterface, index: number) => (
          //Card are not clickable when isTurningInProgress is set on true.
          <Card key={`handCard-${index}`} {...h} disableButton={isTurnInProgress} />
        ))
      ) : (
        <CyberPunkButton />
      )}
    </div>
  );
}

export default GameFooter;