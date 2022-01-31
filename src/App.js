import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from "./components/Navbar.js";
import {  BrowserRouter , Routes , Route } from "react-router-dom"
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading  from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"



function App() {

  return (
  <BrowserRouter>
       <Prenavbar/>
       <Navbar />
            
        <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>


       <Slider start={data.banner.start} />
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES" />
      
       <HotAccessoriesMenu />
  
      <Routes>
      <Route exact path="/music" element={
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}></Route>
    
        <Route exact path="/smartDevice" element={
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}></Route>
       

        <Route exact path="/home" element ={
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}></Route>
      

       <Route exact path="/lifestyle" element ={
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}></Route>


        <Route exact path="/mobileAccessories"  element ={
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}></Route>
     
       </Routes>

       <Heading text="PRODUCT REVIEWS"/>

       <ProductReviews productReviews={data.productReviews}/>

       <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} /> 

   </BrowserRouter>
   

  );
}

export default App;









// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// // import Navbar from './Navbar'
// // const Navbar = <div> NAVBAR </div>
// // const name ="Product";
// import Prenavbar from './components/Prenavbar';
// import Navbar from "./components/Navbar.js";
// import {  BrowserRouter as Router,Route } from "react-router-dom"
// import Slider from "./components/Slider.js"
// import data from "./data/data.json"
// import Offers from "./components/Offers.js"
// import Heading from "./components/Heading.js"
// import StarProduct from "./components/StarProduct.js"
// import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
// import HotAccessories from "./components/HotAccessories.js"
// function App() {

//   return (
//     <Router>
//       <Prenavbar/>
//       < Navbar/>
//       <Slider start={data.banner.start}/>
//       <Offers offer={data.offer}/>
//       <Heading text ="STAR PRODUCTS"/>
//       <StarProduct starProduct= {data.starProduct}/>
//       <Heading text="HOT ACCESSORIES"/>
//       <HotAccessoriesMenu/>
//       <Route exact path="/music">
//         <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
//       </Route>

//     </Router>    
//   );
// }

// export default App;



















//     {/* {Navbar}
//     <div >
//       IMG 
//       const
//       price
//       </div>

//      <div >
//        helloo
//      </div>
//      </>

//   );
// } */}


// // const stylingOptions = {
// //   backgroundColor:"red",
// //   padding:"10px"
// //   }

// // return (
// //   <>
//   {/* <div> */}
//   {/* <Navbar/>
//   <div style ={stylingOptions}>
    
//     IMG  */}
//     {/* const */}
//     {/* {name}  */}
//     {/* price
//     </div> */}

//    {/* <div className="class" id="id"></div>
//    <label htmlFor="hello"></label> */}
//    {/* <div style={{
//      backgroundColor:"blue",
//     padding:"10px"}} >
//      helloo
//    </div> */}
//   //  </>
//   //  </div>
// // );

