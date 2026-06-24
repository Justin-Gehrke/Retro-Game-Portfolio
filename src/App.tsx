import './App.css';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import {Skilltree} from './pages/Skilltree';
import { AdventurerLog } from './pages/AdventurerLog';
import { QuestLog } from './pages/QuestLog';
import { Game } from './pages/Game';
import { Layout } from './Layout';

function App() {
 
return (
  <Router>
    <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<AdventurerLog />} />
          <Route path="/Skilltree" element={<Skilltree />} />
          <Route path="/quest-log" element={<QuestLog />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    
  </Router>
);

}




export default App;