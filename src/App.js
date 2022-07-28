import './App.scss';
import Navbar from './component/Navbar/Navbar';
import Searchbar from './component/Searchbar/Searchbar';
import Topbar from './component/Topbar/Topbar';
import Hero from './component/Hero/Hero';
import Cards from './component/Cards/Cards';
import Collection from './component/Collection/Collection';
import WeekHighlight from './component/Week_highlight/WeekHighlight';
import Discount from './component/Discount/Discount';
import Recommend from './component/Recommnend/Recommend';
import Section from './component/Section/Section';
import Policy from './component/Policy/Policy';
import Footer from './component/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const body = document.body;
    body.style.width = "100vw";
    body.style.overflowX = "hidden";
  });
  return (
    <div className="App">
      <Topbar />
      <Searchbar />
      <Navbar />
      <Hero />
      <Cards />
      <Collection />
      <WeekHighlight />
      <Discount />
      <Recommend />
      <Section />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
