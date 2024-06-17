import './App.css';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import MotivationPage from './components/MotivationPage';
import RegionOfTravel from './components/RegionOfTravel';
import Footer from './components/Footer';
import altaiText1 from './texts/altaiText1';


function App() {
  return (
    <div className="container center">
      <div className="content">
        <MainPage id='main' />
        <AboutPage id='about' />
        <MotivationPage id='motivation' />
        <RegionOfTravel id='altai' title='Алтай' />
        <RegionOfTravel id='karelia' title='Карелия' />
        <RegionOfTravel />
        <Footer />
      </div>
    </div>
  );
}

export default App;