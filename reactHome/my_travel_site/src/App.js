import './App.css';
import './css/style.css'
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import MotivationPage from './components/MotivationPage';
import RegionOfTravel from './components/RegionOfTravel';
import Footer from './components/Footer';

import {AltaiText1} from './texts/RegionOfTravelText';
import {AltaiText2} from './texts/RegionOfTravelText';
import {KareliaText} from './texts/RegionOfTravelText';
import {SolovkiText} from './texts/RegionOfTravelText';

import AltaiHorseTravelText from './texts/AltaiHorseTravelText';
import AltaiRaftingKatunText from './texts/AltaiRaftingKatunText';
import KareliaSplavChirkaKemText from './texts/KareliaSplavChirkaKemText';
import KareliaKemText from './texts/KareliaKemText';
import Solovki23Text from './texts/Solovki23Text';
import LocalTravel from './components/LocalTravel';


function App() {
  const mainId = 'main';
  const aboutId = 'about';
  const motivationId = 'motivation';
  const footerId = 'footer';
  const altaiId = 'altai';
  const kareliaId = 'karelia';
  const solovkiId = 'solovki';

  const altaiText1 = <AltaiText1 id={altaiId} />
  const altaiText2 = <AltaiText2 id={altaiId}/>
  const kareliaText = <KareliaText id={kareliaId} />
  const solovkiText = <SolovkiText id={solovkiId} />
  const altaiHorseTravelText = <AltaiHorseTravelText/>
  const altaiRaftingKatunText = <AltaiRaftingKatunText/>
  const kareliaSplavChirkaKemText = <KareliaSplavChirkaKemText/>
  const kareliaKemText = <KareliaKemText />
  const solovki23Text = <Solovki23Text/>

  const altaiHorseTravel = <LocalTravel id='altai__horseTravel' title='Конный поход, Алтай, июль - август 2022 год' text={altaiHorseTravelText}/>
  const altaiRaftingKatunTravel = <LocalTravel id='altai__raftingKatun' title='Сплав на рафтах, река Катунь, август 2022 год' text={altaiRaftingKatunText}/>

  const splavChirkaKem = <LocalTravel id='karelia__splavChirkaKem' title='Сплав на байдарках, река Чирка-Кемь, август 2023 год' text={kareliaSplavChirkaKemText}/>
  const kareliaKem = <LocalTravel id='karelia__kem' title='городок Кемь, август 2023 год' text={kareliaKemText} />

  const solovki23 = <LocalTravel id='solovki__trip2023' title='Остров Соловки, 2023 год' text={solovki23Text} />
 
  return (
    <div className="container center">
      <div className="content">
        <MainPage id={mainId} />
        <AboutPage id={aboutId} />
        <MotivationPage id={motivationId} />
        <RegionOfTravel id={altaiId} title='Алтай' text={[altaiText1, altaiText2]} local_travel={[altaiHorseTravel, altaiRaftingKatunTravel]} />
        <RegionOfTravel id={kareliaId} title='Карелия' text={[kareliaText]} local_travel={[splavChirkaKem, kareliaKem]}/>
        <RegionOfTravel id={solovkiId} title='Соловки' text={[solovkiText]} local_travel={[solovki23]} />
        <Footer id={footerId} />
      </div>
    </div>
  );
}

export default App;