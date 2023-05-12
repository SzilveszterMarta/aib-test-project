import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Details from './Details';
import List from './List';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />} />
          <Route path="/details/*" element={<Details />} />
          <Route path="*" element={<List />} />
       </Routes>
    </div>
  );
}

export default App;
