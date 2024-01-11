import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "@/components/Card/Card";
import MainHud from "./MainHud/MainHud";
import type { RootState } from "@/store";
import "./styles.scss";


const GameMain = () => {
  // Display the damage of the player and the computer datacenters
  const playerDataCenterDamage = useSelector(({ playerOne }: RootState) => playerOne.damageToDataCenter);
  const playerDataCenterHeal = useSelector(({ playerOne }: RootState) => playerOne.healToDataCenter);
  const cpuDataCenterDamage = useSelector(({ cpu }: RootState) => cpu.damageToDataCenter);
  const cpuDataCenterHeal = useSelector(({ cpu }: RootState) => cpu.healToDataCenter);

  const [isPlayerOneDamageVisible, setIsPlayerOneDamageVisible] = useState(false);
  const [isPlayerOneHealVisible, setIsPlayerOneHealVisible] = useState(false);
  const [isCpuDamageVisible, setIsCpuDamageVisible] = useState(false);
  const [isCpuHealVisible, setIsCpuHealVisible] = useState(false);

  // Display for 2seconds the damage/heal when the store is updated 
  useEffect(() => {
    setIsPlayerOneDamageVisible(true);
    setTimeout(() => {
      setIsPlayerOneDamageVisible(false)
    }, 2000)
  }, [playerDataCenterDamage]);

  useEffect(() => {
    setIsPlayerOneHealVisible(true);
    setTimeout(() => {
      setIsPlayerOneHealVisible(false)
    }, 2000)
  }, [playerDataCenterHeal]);

  useEffect(() => {
    setIsCpuDamageVisible(true);
    setTimeout(() => {
      setIsCpuDamageVisible(false)
    }, 2000)
  }, [cpuDataCenterDamage]);

  useEffect(() => {
    setIsCpuHealVisible(true);
    setTimeout(() => {
      setIsCpuHealVisible(false)
    }, 2000)
  }, [cpuDataCenterHeal]);

  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip)
  }

  const cardProps = useSelector((state: RootState) => state.gameTable.playedCard);

  //For desactivate the click on the card in the GameMain component
  const disableButton = true;

  return (
    <main className="game_main">
      <MainHud player="playerOne" />
      <div className="stats_display">
        <span className={`damage ${isPlayerOneDamageVisible ? "show" : ""}`}>
          {isPlayerOneDamageVisible && (playerDataCenterDamage > 0 ? `-${playerDataCenterDamage}` : "")}
        </span>
        <span className={`heal ${isPlayerOneHealVisible ? "show" : ""}`}>
          {isPlayerOneHealVisible && (playerDataCenterHeal > 0 ? `+${playerDataCenterHeal}` : "")}
        </span>
      </div>
      <div className="game_table">
        <div className="played-card">
          {cardProps ? (
            <Card {...cardProps} disableButton={disableButton} onGameMain={true} className="played" />
          ) : null}
        </div>
        <div className="deck-container">
          <div className={`deck ${flip ? 'deck-transform' : ''}`} onClick={handleFlip}>
            <div className="deck-front">
            </div>
            <div className="deck-back">
            </div>
          </div>
        </div>

      </div>
      <div className="stats_display">
        <span className={`damage ${isCpuDamageVisible ? "show" : ""}`}>
          {isCpuDamageVisible && (cpuDataCenterDamage > 0 ? `-${cpuDataCenterDamage}` : "")}
        </span>
        <span className={`heal ${isCpuHealVisible ? "show" : ""}`}>
          {isCpuHealVisible && (cpuDataCenterHeal > 0 ? `+${cpuDataCenterHeal}` : "")}
        </span>
      </div>
      <MainHud player="cpu" />
    </main>
  );
};

export default GameMain;
