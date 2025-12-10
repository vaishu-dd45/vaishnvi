import Hello from "./components/hello";
import Hi from "./components/hi";
import Nod from "./components/Node";
import Bye from "./components/bye";
import Array from "./components/array";
import Memo from "./components/memo";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
    <Hi/>
    <Routes>  
      <Route path="/array" element={<Array/>}/>
      <Route path="/memo" element={<Memo/>}/>
    </Routes>
    </div>
  );
}

export default App;
