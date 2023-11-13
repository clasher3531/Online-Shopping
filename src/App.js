import ProductListing from './components/ProductListing';
import HeroCarousel from './components/HeroCarousel';
import HeaderUtility from './components/Header/HeaderUtility';
import './App.css';

function App() {

    return (
      <div className='App'>
        <HeaderUtility/>
        <HeroCarousel/>
        <ProductListing/>
      </div>
  );
}

export default App;
