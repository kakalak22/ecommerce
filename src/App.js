import './App.scss';
import Navbar from './component/Navbar/Navbar';
import Searchbar from './component/Searchbar/Searchbar';
import Topbar from './component/Topbar/Topbar';
import Hero from './component/Hero/Hero';
import Cards from './component/Cards/Cards';
import Collection from './component/Collection/Collection';
import WeekHighlight from './component/Week_highlight/WeekHighlight';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Searchbar />
      <Navbar />
      <Hero />
      <Cards />
      <Collection />
      <WeekHighlight />
    </div>
  );
}

export default App;
