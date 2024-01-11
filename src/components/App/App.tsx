import { Route, Routes } from '../../../node_modules/react-router-dom/dist/index';
import HomePage from '../HomePage/HomePage';
import GamePage from '../GamePage/GamePage';
import "./styles.scss";
import Cardspages from '../CardsPage/CardsPage';
import Rulespage from '../RulesPage/RulesPage';
import NotFound from '../404/404';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/game" element={<GamePage />} />

      <Route path="/cards" element={<Cardspages />} />

      <Route path="/rules" element={<Rulespage />} />

      <Route path="*" element={<NotFound />} />
      {/*<Route path="game" element={<LoginPage />}/>
      <Route path="game" element={<SignInPage />}/> */}
    </Routes>
  );
}

export default App;
