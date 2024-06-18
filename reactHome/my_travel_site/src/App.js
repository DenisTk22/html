import './App.css';
import './css/style.css'
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import MotivationPage from './components/MotivationPage';
import RegionOfTravel from './components/RegionOfTravel';
import Footer from './components/Footer';
import AltaiText1 from './texts/AltaiText1';
import AltaiText2 from './texts/AltaiText2';
import KareliaText from './texts/KareliaText';
import SolovkiText from './texts/SolovkiText';


function App() {
  const altaiText1 = <AltaiText1/>
  const altaiText2 = <AltaiText2/>
  const kareliaText = <KareliaText/>
  const solovkiText = <SolovkiText/>

  return (
    <div className="container center">
      <div className="content">
        <MainPage id='main' />
        <AboutPage id='about' />
        <MotivationPage id='motivation' />
        <RegionOfTravel id='altai' title='Алтай' text1={altaiText1} text2={altaiText2} />
        <RegionOfTravel id='karelia' title='Карелия' text1={kareliaText} text2={null} />
        <RegionOfTravel id='solovki' title='Соловки' text1={solovkiText} text2={null} />
        <Footer id='footer' />
      </div>
    </div>
  );
}

export default App;