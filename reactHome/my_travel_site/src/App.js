import './css/fontawesome/css/all.min.css';
import './css/style.css';

import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import MotivationPage from './components/MotivationPage';
import RegionOfTravel from './components/RegionOfTravel';
import Footer from './components/Footer';
import Day from './components/Day';
import Place from './components/Place';

import * as regionOfTravelText from './texts/RegionOfTravelText';
import * as localTravelText from './texts/LocalTravelText';

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

import * as points from "./photos/points";

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

  const altaiText1 = <regionOfTravelText.AltaiText1 id={altaiId} />
  const altaiText2 = <regionOfTravelText.AltaiText2 id={altaiId}/>
  const kareliaText = <regionOfTravelText.KareliaText id={kareliaId} />
  const solovkiText = <regionOfTravelText.SolovkiText id={solovkiId} />

  const altaiHorseTravelText = <localTravelText.AltaiHorseTravelText/>
  const altaiRaftingKatunText = <localTravelText.AltaiRaftingKatunText/>
  const kareliaSplavChirkaKemText = <localTravelText.KareliaSplavChirkaKemText/>
  const kareliaKemText = <localTravelText.KareliaKemText />
  const solovki23Text = <localTravelText.Solovki23Text/>

  const altaiHorseTravelDaysRender = <Day id={horseId} days={altaiHorseTravelDays} photo={[points.altaiHorseTravelDay1, points.altaiHorseTravelDay2, points.altaiHorseTravelDay3, points.altaiHorseTravelDay4, points.altaiHorseTravelDay5, points.altaiHorseTravelDay6, points.altaiHorseTravelDay7, points.altaiHorseTravelDay8]} />
  const altaiRaftingKatunPlacesRender = <Place id={raftKatunId} places={altaiRaftingKatunPlaces} photo={[points.altaiRaftingKatunPlace1, points.altaiRaftingKatunPlace2, points.altaiRaftingKatunPlace3, points.altaiRaftingKatunPlace4]} />
  const kareliaKemPlacesRender = <Place id={kemId} places={kareliaKemPlaces} photo={[points.kareliaKemPlace1, points.kareliaKemPlace2, points.kareliaKemPlace3]} />
  const kareliaSplavChirkaKemDaysRender = <Day id={splavKemId} days={kareliaSplavChirkaKemDays} photo={[points.kareliaSplavChirkaKemDay1, points.kareliaSplavChirkaKemDay2, points.kareliaSplavChirkaKemDay3, points.kareliaSplavChirkaKemDay4, points.kareliaSplavChirkaKemDay5, points.kareliaSplavChirkaKemDay6, points.kareliaSplavChirkaKemDay7]} />
  const solovki23PlacesRender = <Place id={solovki23Id} places={solovki23Places} photo={[points.solovki23Place1, points.solovki23Place2, points.solovki23Place3, points.solovki23Place4]} />

  const altaiMedals = <Medal id={altaiId} travels={altaiTravels} photo={[photoAltaiHorseTravel, photoAltaiRaftingKatun]} />
  const solovkiMedals = <Medal id={solovkiId} travels={solovkiTravels} photo={[photoSolovki2023]}/>
  const kareliaMedals = <Medal id={kareliaId} travels={kareliaTravels} photo={[photoKareliaSplavChirkaKem, photoKareliaKem]} />

  const altaiHorseTravel = <LocalTravel id={horseId} title={horseTitle} text={altaiHorseTravelText} points={altaiHorseTravelDaysRender}/>
  const altaiRaftingKatunTravel = <LocalTravel id={raftKatunId} title={raftKatunTitle} text={altaiRaftingKatunText} points={altaiRaftingKatunPlacesRender}/>
  const splavChirkaKem = <LocalTravel id={splavKemId} title={splavKemTitle} text={kareliaSplavChirkaKemText} points={kareliaSplavChirkaKemDaysRender}/>
  const kareliaKem = <LocalTravel id={kemId} title={kemTitle} text={kareliaKemText} points={kareliaKemPlacesRender}/>
  const solovki23 = <LocalTravel id={solovki23Id} title={solovki23Title} text={solovki23Text} points={solovki23PlacesRender}/>

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