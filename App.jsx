import './app.scss'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallex from './components/Paralax/Parallex';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';

const App = () => {
  return <div>
    <section id='Homepage'>
      <div>
      <Navbar/> <Hero/></div>
    </section>
    <section id='Services' ><Parallex type="Services"/></section>
    <section><Services/></section>
    <section id='PortFolio'><Parallex type="PortFolio"/></section>
    <Portfolio/>
    <section id='Contact'><Contact/></section>
  </div>;
};

export default App;
