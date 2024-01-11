// import { useSelector } from "react-redux";
import { useGetCardsQuery } from "@/Services/cardApi";
import { CardInterface } from "@/interfaces";
import CardSample from "./CardSample/CardSample";
import "./styles.scss";

function Cardspages() {
  
  const { data: cards, isLoading, error } = useGetCardsQuery();

  
  //! les cartes filtré selon sont type
  const crypto = cards?.filter((crypto: CardInterface) => crypto.type === "crypto");
  console.log(crypto);

  const update = cards?.filter((update: CardInterface) => update.type === "update");
  console.log(update);

  const virus = cards?.filter((virus: CardInterface) => virus.type === "virus");
  console.log(virus);

  //! Trouver un moyen de séparer les types de card et refacto
  return (
    <>
      <div className="card_page_container">
        <h1>Cartes presentes dans le jeu</h1>
        <h2 className="crypto_title">Cartes de type "crypto"</h2>
        <div className="crypto">
          <ul className="card_list">

            {isLoading && <div>Loading...</div>}

            {error && <div>Something went wrong...</div>}

            {crypto?.map((crypto: CardInterface) => (
              <li key={crypto.id}>
                <CardSample {...crypto} />
              </li>
            ))}
          </ul>
        </div>

        <h2 className="update_title">Cartes de type "update"</h2>
        <div className="update">
          <ul className="card_list">
            {isLoading && <div>Loading...</div>}

            {error && <div>Something went wrong...</div>}

            {update?.map((update: CardInterface) => (
              <li key={update.id}>
                <CardSample {...update} />
              </li>
            ))}
          </ul>
        </div>

        <h2 className="virus_title">Cartes de type "virus"</h2>
        <div className="virus">
          <ul className="card_list">
            {isLoading && <div>Loading...</div>}
            
            {error && <div>Something went wrong...</div>}
            
            {virus?.map((virus: CardInterface) => (
              <li key={virus.id}>
                <CardSample {...virus} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cardspages;
