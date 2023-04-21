import { Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import Rockets from './routes/Rockets';
import Navbar from './components/Navbar';
import Dragons from './routes/Dragon';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="dragons" element={<Dragons />} />
        <Route path="/" element={<Rockets />} />
        <Route path="*" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
