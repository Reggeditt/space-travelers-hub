import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import Rockets from './routes/Rockets';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="*" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
