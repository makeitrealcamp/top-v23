import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import EpisodesPage from './pages/Episodes';
import EpisodeDetailPage from './pages/EpisodeDetail';
import CharactersPage from './pages/Characters';
import CharacterDetailPage from './pages/CharacterDetail';
import RegisterPage from './pages/RegisterCharacter';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/:id" element={<EpisodeDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
