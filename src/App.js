import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import PlayerPlaylist from "./components/PlayerPlaylist"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />
      <div className='player-container'>
        <div className='side-bar'>
          <Sidebar/>
        </div>
        <div className='player-playlist'>
          <PlayerPlaylist/>
        </div>
      </div>

      <div className='footer'>
        <Footer/>
      </div>
      
       
    </>
  );
}

export default App;
