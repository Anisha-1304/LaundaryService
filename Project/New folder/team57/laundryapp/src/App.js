import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./component/NavigationBar";
import { DashBoard } from "./component/DashBoard";
import  Signup  from "./component/Signup";
import Login from "./component/Login";
import AboutUs from "./component/AboutUs";
import FooterComp from "./component/FooterComp";
import Services from "./component/Services";
import  Orders  from "./component/Orders";



function App() {
  return (
      <BrowserRouter>
        <NavigationBar/>
         <Routes>
           <Route path="/" element={<DashBoard/>}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
           <Route path="/Services" element={<Services/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/Orders" element={<Orders></Orders>}></Route> 
       </Routes>
       <FooterComp></FooterComp>
     </BrowserRouter>

   
    
 
  );
}

export default App;
