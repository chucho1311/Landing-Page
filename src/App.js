import './App.css';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="">
      <header className="row centrar App-header py-20" style={{margin:0, overflow:"hidden"}}>
        <Home />
      </header>
    </div>
  );
}

export default App;
