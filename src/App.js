import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { PagePart1 } from './pages/PagePart1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PagePart1 />
    </div>
  );
}

export default App;
