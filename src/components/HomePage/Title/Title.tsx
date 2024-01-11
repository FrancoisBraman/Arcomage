import { useState } from 'react';
import './styles.scss';

function Title() {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <h1 className="title" title='description' onClick={handleClick}>Arcomage</h1>
      {
        !isOpen &&
        <div className="board">
          <div className="content">
            <p className="description">Arcomage est à l'origine un mini-jeu en tour par tour inclus dans deux épisodes de la série de jeux vidéo de rôle Might and Magic:</p>
            <p className="description">Might and Magic VII : Pour le sang et l'honneur et Might and Magic VIII : le Jour du destructeur.</p>
            <p className="description"> Il s'agit d'un jeu de cartes informatique qui reprend nombre de thèmes du monde dans lequel il prend place.</p>
            <p className="description">Il fait partie intégrante du déroulement des deux Might and Magic où il apparaît, car les personnages peuvent entrer dans une taverne et jouer pour de l'argent.</p>
            <p className="description">Dans les deux jeux, il y a une quête consistant à gagner une partie d'Arcomage dans chaque taverne du monde.</p>
            <p className="description">Voici notre version remastérisée, enjoy</p>
          </div>
        </div>
      }
    </>
  )
};

export default Title;
