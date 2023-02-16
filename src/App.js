import {Routes,Route,BrowserRouter} from "react-router-dom"
import Beaches from "./component/beaches/beaches";
import Bird from "./component/birds/birds";
import Home from "./component/home";
import Mountain from "./component/mountain/mountain";
import Navbar from "./component/navbar/navbar";
import Food from "./component/food/food";
function App() {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/beaches" element={<Beaches/>}/>
    <Route path="/mountain" element={<Mountain/>}/>
    <Route path="/birds" element={<Bird/>}/>
    <Route path="/food" element={<Food/>}/>
  </Routes>
  </BrowserRouter>
  </>
 )
}

export default App;
