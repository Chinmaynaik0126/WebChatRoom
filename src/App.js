
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js'

function App() {
  return (
    //BEM naming Convention
    <div className="App">
      
      <div className = "app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
