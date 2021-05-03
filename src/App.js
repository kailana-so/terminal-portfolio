import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MainPage from './components/MainPage.js'

function App() {
  return (
    <div className="App">
      <Header />

        <MainPage />
        <span> ----- </span>
        {/* <Projects /> */}

      <Footer />
    </div>
  );
}

export default App;
