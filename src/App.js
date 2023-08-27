import './App.css';

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
  
  return (
    <>
      <Header/>
      <SectionWrapper id="upperView">
         <FirstView/> 
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