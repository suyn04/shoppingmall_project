import Home from "./components/main/Home";
import Header from "./components/dup/Header";
import Nav from "./components/dup/Nav";
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
