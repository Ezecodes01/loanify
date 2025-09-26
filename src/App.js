import React from 'react';
import './App.css';
import Home from './pages/home';
import Header from "./components/header";
import EMI from './pages/emi';
import ApplyPage from './pages/apply';
import Footer from './components/footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// import Butty, { Button2, Button3 } from './components/Button';


// function logoutUser(){
//   alert(  " logging out user ")
  
// }

function App() {

  return (
    <>
     <Router>
        <Header/>
          <Routes>
            
            <Route Component={Home} path='/'/>
              
            <Route element={<EMI />} path='/emi'></Route>

           < Route element={<ApplyPage />} path='/apply'/>
            
          </Routes>

        {/* <Home/> */}
        {/* <Footer/> */}
      {/*404PAGE <Route path"*"/></Route>  */}
     </Router>
     <Footer/>
    </>
  );
}

export default App;
