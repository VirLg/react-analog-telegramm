import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LeftColumn from './components/leftColumn/LeftColumn';
import Arhive from './components/arhive/Arhive';
import RightColumn from './components/rightColumn/RightColumn';
import MiddleColumn from './components/middleColumn/MiddleColumn';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LeftColumn />} />
          <Route path="/api/arhive" element={<Arhive />} />
        </Route>
      </Routes>
      <MiddleColumn />
      <RightColumn />
    </div>
  );
}

export default App;
