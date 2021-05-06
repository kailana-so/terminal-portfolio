import './App.css';
import Header from './components/Header.js'
import MainPage from './components/MainPage.js'
import StickyNote from './components/StickyNote.js'

function App() {

  return (
    <div className="App">
      <Header />
      <StickyNote />
      <MainPage />
    </div>
  );
}

export default App;
