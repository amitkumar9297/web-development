import './App.css';
import About from './components/About';
import Awards from './components/Awards';
import Footer from './components/Footer';
import Frame from './components/Frame';
import Header from './components/Header';
import Hero from './components/Hero';
import Plateforms from './components/Plateforms';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import CardSection from './components/cardSection/CardSection'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Frame />
      <Plateforms />
      <CardSection />
      <Services />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}

export default App;
