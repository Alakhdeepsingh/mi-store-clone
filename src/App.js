import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Navbar from './Navbar'
// const Navbar = <div> NAVBAR </div>
// const name ="Product";
import Prenavbar from './components/Prenavbar';
import Navbar from "./components/Navbar.js";
import {  BrowserRouter as Router } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
function App() {

  return (
    <Router>
      <Prenavbar/>
      < Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text ="STAR PRODUCTS"/>
      <Heading text ="STAR "/>
      <Heading text ="PRODUCTS"/>

    </Router>    
  );
}

export default App;



















    {/* {Navbar}
    <div >
      IMG 
      const
      price
      </div>

     <div >
       helloo
     </div>
     </>

  );
} */}


// const stylingOptions = {
//   backgroundColor:"red",
//   padding:"10px"
//   }

// return (
//   <>
  {/* <div> */}
  {/* <Navbar/>
  <div style ={stylingOptions}>
    
    IMG  */}
    {/* const */}
    {/* {name}  */}
    {/* price
    </div> */}

   {/* <div className="class" id="id"></div>
   <label htmlFor="hello"></label> */}
   {/* <div style={{
     backgroundColor:"blue",
    padding:"10px"}} >
     helloo
   </div> */}
  //  </>
  //  </div>
// );

