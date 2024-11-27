import Home from "./components/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import './reset.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Nav/>
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
