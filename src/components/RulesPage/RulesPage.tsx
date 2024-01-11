import './styles.scss'
import Footer from '../HomePage/Footer/Footer';

const RulesPage = () => {
  return (
    <><div className="back-container">
      <div className="rules-container">
        <h1 className="rules-title">Regles du jeu</h1>

        <h2 className="rules-subtitle">But du jeu : </h2>

        <p className="rules">Arcomage est un jeu de cartes au tour par tour où deux joueurs s’affrontent.
          Chaque joueur possède un data center protégée par un firewall et doit défendre
          son data center et essayer de détruire celui de l’adversaire.
        </p>

        <h2 className="rules-subtitle"> Les cartes :</h2 >

        <p className="rules">5 cartes sont distribuées aléatoirement(parmi une collection de 102 cartes existantes)
          à chaque joueur et il en pioche une sixième à chaque début de tour.Elles constituent le deck du joueur.
          Chaque carte possède un nom et une image spécifique, elle appartient à un type de ressources particulier
          et nécessite un nombre de ressources définis de son type pour pouvoir être jouée.Chaque carte agit de manière
          différente sur ses propres ressources, celles de l’adversaire, ou encore sur les data centers ou les firewalls des joueurs
          (certaines cartes ont plusieurs effets ou même des effets spéciaux permettant par exemple de rejouer).
        </p>

        <ul className="rules">
          <li className="rules-lists rules">
            Ex : La carte 1 “Lucky Cache” ajoute 2 Updates et 2 Cryptos au joueur et permet de rejouer // mettre image de la carte ici.
          </li>
        </ul>

        <h2 className="rules-subtitle"> Les ressources :</h2 >

        <p className="rules">Il existe 3 types de ressources : </p>

        <ul className="rules">
          <li className="rules-lists rules">Les updates</li>
          <li className="rules-lists rules">Les cryptomonnaies(ou crypto)</li>
          <li className="rules-lists rules">Les virus</li>
        </ul>

        <p className="rules">Chaque ressource est produite par son générateur correspondant, à savoir :</p>

        <ul className="rules">
          <li className="rules-lists rules">Les softwares produisent des updates.</li>
          <li className="rules-lists rules">Les data miners produisent des cryptos.</li>
          <li className="rules-lists rules">Les hackers produisent des virus.</li>
        </ul>


        <p className="rules">En début de partie, chaque joueur dispose de 5 unités de chaque ressource
          et chaque générateur produit 2 unités de sa ressource à chaque tour de jeu.
          Ainsi, dès le 1er tour, le joueur possède 5 + 2 = 7 unités de chaque ressource, puis 9 au second tour, etc…
          Lorsqu'un joueur joue une carte, le nombre de ressources nécessaires pour jouer la carte
          sera retranché du total de la ressource correspondante. Certaines cartes permettent d’augmenter
          directement le niveau d’une ou plusieurs ressources ou même  un générateur de ressource directement,
          qui produira alors plus de sa ressource à chaque tour.
        </p>

        <h2 className="rules-subtitle"> Mise en place et déroulement de la partie :</h2 >

        <p className="rules">En début de partie, chaque joueur reçoit 5 cartes, ses générateurs de ressources(produisant 2 unités par tour par défaut)
          et 5 unités de chaque ressource.Une pioche est disposée au centre de l’écran.Chaque joueur possède aussi son datacenter
          avec 20 PV et son firewall avec 10 PV à protéger.
          Le joueur qui débute la partie(choisi de manière aléatoire), pioche une 6ème carte pour compléter son deck et
          reçoit les ressources produites par ses générateurs pour chaque tour de jeu.Il peut ensuite choisir de jouer une carte
          s’ il a les ressources suffisantes et d’en appliquer les effets.Ou bien de se défausser d'une carte
          si il ne peut en jouer aucune ou s’il désire se séparer d’un double par exemple.
          Vient alors le tour de l’adversaire et ainsi de suite.
        </p>

        <h2 className="rules-subtitle"> Conditions de victoire :</h2 >

        <p className="rules">Lorsqu’un des joueurs remplit les conditions suivantes, il est déclaré vainqueur :</p>
        <ul className="rules">
          <li className="rules-lists rules">Destruction complète du data center de l’adversaire.</li>
          <li className="rules-lists rules">Son propre data center atteint les 50 PV.</li>
          <li className="rules-lists rules">Le montant d’une de ses ressources atteint 100 unités.</li>
        </ul>

        <h2 className="rules-subtitle"> Variantes :</h2 >

        <p className="rules">Le jeu peut - être joué avec différentes conditions de départ et / ou de victoire
          qui seront stockées dans un cybercafé, qui est soit déjà existant et stocké dans les paramètres du jeu,
          mais peut aussi être créé par les utilisateurs connectés.
          Par exemple:
        </p>

        <ul className="rules">
          <li className="rules-lists rules">fsociety :
            <ul className="rules">
              <li className="rules-lists rules">Conditions de départ: datacenter(25); firewall(30); softwares(4); updates(2); data miners(4); cryptos(2); hackers(4); virus(2).</li>
              <li className="rules-lists rules">Conditions de victoire: datacenter(100); ressources(150).</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
      <Footer />
    </>
  )
};

export default RulesPage