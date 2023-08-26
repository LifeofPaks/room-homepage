import { useState } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';

function App() {
const [displayIndex, setDisplayIndex] = useState(0)

  return (
    <div className="App">
      <Layout displayIndex={displayIndex} setDisplayIndex={setDisplayIndex}/>
    </div>
  );
}

export default App;
