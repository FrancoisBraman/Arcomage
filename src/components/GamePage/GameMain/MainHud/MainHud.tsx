import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import "./styles.scss";

const MainHud = ({ player }: { player: string }) => {
  //get the Pv of the datacenters
  const dataCenterPv = useSelector((state: RootState) =>
    player === "playerOne" ? state.playerOne.data_center : state.cpu.data_center
  );
  //get the name of the players
  const name = useSelector((state: RootState) =>
    player === "playerOne" ? state.playerOne.name : state.cpu.name
  );
  //get the resources 
  const { update, crypto, virus } = useSelector((state: RootState) =>
    player === "playerOne" ? state.playerOne.resources[0] : state.cpu.resources[0]
  );

  const updatePercentage = update.stock;
  const cryptoPercentage = crypto.stock;
  const virusPercentage = virus.stock;

  //Check if a game as already start
  const gameStarted = useSelector((state: RootState) => state.game.gameStarted);


  //A method for the circle progress bars render, avoids duplication of html 
  const renderCircleProgressBar = (className: string, percentage: number) => (
    <div className={`progressbar ${className}`}>
      <svg className="progressbar__svg">
        <circle
          cx="80"
          cy="80"
          r="70"
          className={`progressbar__svg-circle circle-${className} shadow-${className}`}
          style={{
            strokeDashoffset: `calc(440 - (440 * ${gameStarted ? (percentage) : (0)}) / 100)`,
          }}
        ></circle>
      </svg>
      <span className={`progressbar__text shadow-${className}`}>{gameStarted ? (percentage) : (0)}%</span>
    </div>
  );

  return (
    <div className="main_hud">
      <div className="maincontainer">
        <div className={`player-name ${player}`}>{gameStarted ? name : "Unknown"}</div>
        {/* Resources bar */}
        <div className="container__progressbars">
          {renderCircleProgressBar("update_resource", updatePercentage)}
          {renderCircleProgressBar("crypto_resource", cryptoPercentage)}
          {renderCircleProgressBar("virus_resource", virusPercentage)}
        </div>
        {/* Datacenter bar */}
        <div className="container">
          <p className="data_center_description">DataCenter integrity: {gameStarted ? dataCenterPv : "waiting for connection"}</p>
          <div className="progress-bar__container">
            <div className="progress-bar" style={{ width: `${gameStarted ? dataCenterPv : 0}%` }}>
              <span className="progress-bar__text">FireWall is complete!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHud;