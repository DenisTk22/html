import './css/fontawesome/css/all.min.css';
import './css/style.css';

import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import MotivationPage from './components/MotivationPage';
import RegionOfTravel from './components/RegionOfTravel';
import Footer from './components/Footer';

import * as regionOfTravelText from './texts/RegionOfTravelText';
import * as localTravelText from './texts/LocalTravelText';

import Medal from './components/Medal';

import solovkiTravels from './json/solovkiTravels.json';
import altaiTravels from './json/altaiTravels.json';
import kareliaTravels from './json/kareliaTravels.json';

import LocalTravel from './components/LocalTravel';

import photoSolovki2023 from "./images/solovki2023.jpg";
import photoAltaiHorseTravel from "./images/1suguina.JPG";
import photoAltaiRaftingKatun from "./images/8taezhnik.jpg";
import photoKareliaSplavChirkaKem from "./images/kareliaSplav.jpg";
import photoKareliaKem from "./images/kem1.jpg";

import * as pageId from "./id/idOfPages";
import * as travelId from "./id/idOfTravels";

import * as renderTravel from "./const/constRender";

function App() {

  const altaiTitle = 'Алтай';
  const kareliaTitle = 'Карелия';
  const solovkiTitle = 'Соловки';

  const horseTitle = 'Конный поход, Алтай, июль - август 2022 год';
  const raftKatunTitle = 'Сплав на рафтах, река Катунь, август 2022 год';
  const splavKemTitle = 'Сплав на байдарках, река Чирка-Кемь, август 2023 год';
  const kemTitle = 'городок Кемь, август 2023 год';
  const solovki23Title = 'Остров Соловки, 2023 год';  

  const altaiText1 = <regionOfTravelText.AltaiText1 id={pageId.altaiId} />
  const altaiText2 = <regionOfTravelText.AltaiText2 id={pageId.altaiId}/>
  const kareliaText = <regionOfTravelText.KareliaText id={pageId.kareliaId} />
  const solovkiText = <regionOfTravelText.SolovkiText id={pageId.solovkiId} />

  const altaiHorseTravelText = <localTravelText.AltaiHorseTravelText/>
  const altaiRaftingKatunText = <localTravelText.AltaiRaftingKatunText/>
  const kareliaSplavChirkaKemText = <localTravelText.KareliaSplavChirkaKemText/>
  const kareliaKemText = <localTravelText.KareliaKemText />
  const solovki23Text = <localTravelText.Solovki23Text/>

  const altaiMedals = <Medal id={pageId.altaiId} travels={altaiTravels} photo={[photoAltaiHorseTravel, photoAltaiRaftingKatun]} />
  const solovkiMedals = <Medal id={pageId.solovkiId} travels={solovkiTravels} photo={[photoSolovki2023]}/>
  const kareliaMedals = <Medal id={pageId.kareliaId} travels={kareliaTravels} photo={[photoKareliaSplavChirkaKem, photoKareliaKem]} />

  const altaiHorseTravel = <LocalTravel id={travelId.horseId} title={horseTitle} text={altaiHorseTravelText} points={renderTravel.altaiHorseTravelDaysRender}/>
  const altaiRaftingKatunTravel = <LocalTravel id={travelId.raftKatunId} title={raftKatunTitle} text={altaiRaftingKatunText} points={renderTravel.altaiRaftingKatunPlacesRender}/>
  const splavChirkaKem = <LocalTravel id={travelId.splavKemId} title={splavKemTitle} text={kareliaSplavChirkaKemText} points={renderTravel.kareliaSplavChirkaKemDaysRender}/>
  const kareliaKem = <LocalTravel id={travelId.kemId} title={kemTitle} text={kareliaKemText} points={renderTravel.kareliaKemPlacesRender}/>
  const solovki23 = <LocalTravel id={travelId.solovki23Id} title={solovki23Title} text={solovki23Text} points={renderTravel.solovki23PlacesRender}/>

  return (
    <Router>
      <div className="container center">
      <div className="content">
      <Routes>  
            <Route path="/" element={<Navigate to={`/${pageId.mainId}`} />} />
            <Route path={`/${pageId.mainId}`} element={<MainPage id={pageId.mainId} />} />
            <Route path={`/${pageId.aboutId}`} element={<AboutPage id={pageId.aboutId} />} />
            <Route path={`/${pageId.motivationId}`} element={<MotivationPage id={pageId.motivationId} />} />
            <Route path={`/${pageId.altaiId}`} element={<RegionOfTravel id={pageId.altaiId} title={altaiTitle} text={[altaiText1, altaiText2]} medal={[altaiMedals]} local_travel={[altaiHorseTravel, altaiRaftingKatunTravel]} />} />
            <Route path={`/${pageId.kareliaId}`} element={<RegionOfTravel id={pageId.kareliaId} title={kareliaTitle} text={[kareliaText]} medal={[kareliaMedals]} local_travel={[splavChirkaKem, kareliaKem]} />} />
            <Route path={`/${pageId.solovkiId}`} element={<RegionOfTravel id={pageId.solovkiId} title={solovkiTitle} text={[solovkiText]} medal={[solovkiMedals]} local_travel={[solovki23]} />} />
            <Route path={`/${pageId.footerId}`} element={<Footer id={pageId.footerId} />} />
      </Routes>  
      </div>
    </div>
  </Router>
  );
}

export default App;