import { useState } from 'react';
import { Link } from '../../../../node_modules/react-router-dom/dist/index';
import back from '@/assets/card/logo.png';

import './styles.scss';

function CardMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={`cards-split ${isOpen ? 'transition' : ''}`} onClick={handleShowMenu}>
      <li className="card card-1">
        <Link to='/game' target='_blank' >
          <button className="home">
            <span className="home__content">Play_</span>
            <span className="home__glitch"></span>
            <span className="home__label">V0.1</span>
          </button>
        </Link>
        <img className="cardImage" src={back} alt="" />
      </li>
      <li className="card card-2">
        <Link to='/rules'>
          <button className="home">
            <span className="home__content">Rules_</span>
            <span className="home__glitch"></span>
            <span className="home__label">V0.1</span>
          </button>
        </Link>
        <img className="cardImage" src={back} alt="" />
      </li>
      <li className="card card-3">
        <img className="cardImage" src={back} alt="" />
      </li>
      <li className="card card-4">
        <Link to='/cards'>
          <button className="home">
            <span className="home__content">Cards_</span>
            <span className="home__glitch"></span>
            <span className="home__label">V0.1</span>
          </button>
        </Link>
        <img className="cardImage" src={back} alt="" />
      </li>
      <li className="card card-5">
        <Link to='#'>
          <button className="home">
            <span className="home__content">Login/SignIn_</span>
            <span className="home__glitch"></span>
            <span className="home__label">V0.1</span>
          </button>
        </Link>
        <img className="cardImage" src={back} alt="" />
      </li>
    </ul>
  );
}

export default CardMenu;
