import './App.css';
import React, { useState, useEffect } from 'react';

// Components import:
import FirstView from './components/1.FirstView';
import Header from './components/Header';
import About from './components/2.About';
import Services from './components/3.Services';
import Contact from './components/4.Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SectionWrapper from './Functions/Observer';

export default function App() {
   const [showPopup, setShowPopup] = useState(false);
   useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000); // 3 seconds
  
      return () => clearTimeout(timer);
    }, []);
    
     // Handle closing the popup
  const closePopup = () => {
   setShowPopup(false);
 };
 useEffect(() => {
   if (showPopup) {
     document.body.style.overflow = 'hidden'; // Prevent scrolling
   } else {
     document.body.style.overflow = 'auto'; // Enable scrolling
   }
 }, [showPopup]);
  return (
    <>
      <Header/>
      <SectionWrapper id="upperView">
         <FirstView/> 
         {
         showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>See the discount only today!</p>
            <div>
             <button onClick={closePopup}>Close</button> 
             <a href='#contactPage' onClick={closePopup}><button>Contact</button></a>
            </div>
            
          </div>
        </div>
      )}
      </SectionWrapper>
      <SectionWrapper id="aboutPage">
         <About/>
      </SectionWrapper>
      <SectionWrapper id="servicesPage">
         <Services/>
      </SectionWrapper>
      <SectionWrapper id="contactPage">
         <Contact/>
         <Footer/>
         <ScrollToTop/>
      </SectionWrapper>
    </>
  )
};