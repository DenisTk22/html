import './App.css';
import './css/fontawesome/css/all.min.css'
import './css/style.css';

import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import MotivationPage from './components/MotivationPage';
import RegionOfTravel from './components/RegionOfTravel';
import Footer from './components/Footer';
import Day from './components/Day';
import Place from './components/Place';

import {AltaiText1} from './texts/RegionOfTravelText';
import {AltaiText2} from './texts/RegionOfTravelText';
import {KareliaText} from './texts/RegionOfTravelText';
import {SolovkiText} from './texts/RegionOfTravelText';

import {AltaiHorseTravelText} from './texts/LocalTravelText';
import {AltaiRaftingKatunText} from './texts/LocalTravelText';
import {KareliaSplavChirkaKemText} from './texts/LocalTravelText';
import {KareliaKemText} from './texts/LocalTravelText';
import {Solovki23Text} from './texts/LocalTravelText';

import Medal from './components/Medal';
import solovkiTravels from './json/solovkiTravels.json';
import altaiTravels from './json/altaiTravels.json';
import kareliaTravels from './json/kareliaTravels.json';

import altaiHorseTravelDays from './json/altaiHorseTravel.json';
import altaiRaftingKatunPlaces from './json/altaiRaftingKatun.json';
import kareliaKemPlaces from './json/kareliaKem.json';
import kareliaSplavChirkaKemDays from './json/kareliaSplavChirkaKem.json';
import solovki23Places from './json/solovki23.json';

import LocalTravel from './components/LocalTravel';

import photoSolovki2023 from "./images/solovki2023.jpg";
import photoAltaiHorseTravel from "./images/1suguina.JPG";
import photoAltaiRaftingKatun from "./images/8taezhnik.jpg";
import photoKareliaSplavChirkaKem from "./images/kareliaSplav.jpg";
import photoKareliaKem from "./images/kem1.jpg";

import altaiHorseTravelDay1 from "./images/1suguina.JPG";
import altaiHorseTravelDay2 from "./images/2muehta.JPG";
import altaiHorseTravelDay3 from "./images/3waterfall.JPG";
import altaiHorseTravelDay4 from "./images/4baioukskiy.JPG";
import altaiHorseTravelDay5 from "./images/5veronica.JPG";
import altaiHorseTravelDay6 from "./images/6karakolskie.png";
import altaiHorseTravelDay7 from "./images/7kedrovaya.JPG";
import altaiHorseTravelDay8 from "./images/8taezhnik.jpg";


function App() {
  const mainId = 'main';
  const aboutId = 'about';
  const motivationId = 'motivation';
  const footerId = 'footer';
  const altaiId = 'altai';
  const kareliaId = 'karelia';
  const solovkiId = 'solovki';

  const altaiTitle = 'Алтай';
  const kareliaTitle = 'Карелия';
  const solovkiTitle = 'Соловки';

  const horseId = 'altai__horseTravel';
  const raftKatunId = 'altai__raftingKatun';
  const splavKemId = 'karelia__splavChirkaKem';
  const kemId = 'karelia__kem';
  const solovki23Id = 'solovki__trip2023';

  const horseTitle = 'Конный поход, Алтай, июль - август 2022 год';
  const raftKatunTitle = 'Сплав на рафтах, река Катунь, август 2022 год';
  const splavKemTitle = 'Сплав на байдарках, река Чирка-Кемь, август 2023 год';
  const kemTitle = 'городок Кемь, август 2023 год';
  const solovki23Title = 'Остров Соловки, 2023 год';  

  const altaiText1 = <AltaiText1 id={altaiId} />
  const altaiText2 = <AltaiText2 id={altaiId}/>
  const kareliaText = <KareliaText id={kareliaId} />
  const solovkiText = <SolovkiText id={solovkiId} />
  const altaiHorseTravelText = <AltaiHorseTravelText/>
  const altaiRaftingKatunText = <AltaiRaftingKatunText/>
  const kareliaSplavChirkaKemText = <KareliaSplavChirkaKemText/>
  const kareliaKemText = <KareliaKemText />
  const solovki23Text = <Solovki23Text/>

  const altaiHorseTravelDaysRender = <Day id={horseId} days={altaiHorseTravelDays} photo={[altaiHorseTravelDay1, altaiHorseTravelDay2, altaiHorseTravelDay3, altaiHorseTravelDay4, altaiHorseTravelDay5, altaiHorseTravelDay6, altaiHorseTravelDay7, altaiHorseTravelDay8]} />

  const altaiMedals = <Medal id={altaiId} travels={altaiTravels} photo={[photoAltaiHorseTravel, photoAltaiRaftingKatun]} />

  const solovkiMedals = <Medal id={solovkiId} travels={solovkiTravels} photo={[photoSolovki2023]}/>

  const kareliaMedals = <Medal id={kareliaId} travels={kareliaTravels} photo={[photoKareliaSplavChirkaKem, photoKareliaKem]} />

  const altaiHorseTravel = <LocalTravel id={horseId} title={horseTitle} text={altaiHorseTravelText} points={altaiHorseTravelDaysRender}/>
  const altaiRaftingKatunTravel = <LocalTravel id={raftKatunId} title={raftKatunTitle} text={altaiRaftingKatunText}/>

  const splavChirkaKem = <LocalTravel id={splavKemId} title={splavKemTitle} text={kareliaSplavChirkaKemText}/>
  const kareliaKem = <LocalTravel id={kemId} title={kemTitle} text={kareliaKemText} />

  const solovki23 = <LocalTravel id={solovki23Id} title={solovki23Title} text={solovki23Text} />

 
  return (
    <div className="container center">
      <div className="content">
        <MainPage id={mainId} />
        <AboutPage id={aboutId} />
        <MotivationPage id={motivationId} />
        <RegionOfTravel id={altaiId} title={altaiTitle} text={[altaiText1, altaiText2]} medal={[altaiMedals]} local_travel={[altaiHorseTravel, altaiRaftingKatunTravel]} />
        <RegionOfTravel id={kareliaId} title={kareliaTitle} text={[kareliaText]} medal={[kareliaMedals]} local_travel={[splavChirkaKem, kareliaKem]}/>
        <RegionOfTravel id={solovkiId} title={solovkiTitle} text={[solovkiText]} medal={[solovkiMedals]} local_travel={[solovki23]} />
        <Footer id={footerId} />
      </div>
    </div>
  );
}

export default App;