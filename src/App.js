import './App.css';
import DisableMobile from './components/DisableMobile';
import Header from './components/Header.js'
import MainPage from './components/MainPage.js'


function App() {

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobile = () => {
        if (isMobile) {
            alert('sorry mobile only!')
        } else {
            return null
        }
  }

  return (
    <div className="App">
      {mobile}

      <Header />

      <MainPage />
      

    </div>
  );
}

export default App;
