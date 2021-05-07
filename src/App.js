import './App.css';
import Header from './components/Header.js'
import MainPage from './components/MainPage.js'
import StickyNote from './components/StickyNote.js'
// import IgFrame from './components/IgFrame.js'

function App() {

  return (
    <div className="App">
      <Header />
      
      <MainPage />
      {/* <IgFrame /> */}
    </div>
  );
}

export default App;
