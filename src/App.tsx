import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/main-menu";
import GamePage from "./pages/game-page";
import PuzzleCreator from "./pages/puzzle-creator";
import PuzzleLibrary from "./pages/puzzle-library";
import SettingsPage from "./pages/settings-page";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/solve" element={<GamePage />} />
          <Route path="/create" element={<PuzzleCreator />} />
          <Route path="/library" element={<PuzzleLibrary />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
