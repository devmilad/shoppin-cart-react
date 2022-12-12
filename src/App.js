import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Shopping from "./Shopping";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Card /> }/>
          <Route path='/cart' element={ <Shopping /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
