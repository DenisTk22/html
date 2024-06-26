import Day from '../components/Day';
import Place from '../components/Place';

import * as points from "../photos/points";
import * as pageId from "../id/idOfPages";
import * as travelId from "../id/idOfTravels";

import solovkiTravels from '../json/solovkiTravels.json';
import altaiTravels from '../json/altaiTravels.json';
import kareliaTravels from '../json/kareliaTravels.json';

import altaiHorseTravelDays from '../json/altaiHorseTravel.json';
import altaiRaftingKatunPlaces from '../json/altaiRaftingKatun.json';
import kareliaKemPlaces from '../json/kareliaKem.json';
import kareliaSplavChirkaKemDays from '../json/kareliaSplavChirkaKem.json';
import solovki23Places from '../json/solovki23.json';

const altaiHorseTravelDaysRender = <Day id={travelId.horseId} days={altaiHorseTravelDays} photo={[points.altaiHorseTravelDay1, points.altaiHorseTravelDay2, points.altaiHorseTravelDay3, points.altaiHorseTravelDay4, points.altaiHorseTravelDay5, points.altaiHorseTravelDay6, points.altaiHorseTravelDay7, points.altaiHorseTravelDay8]} />
const altaiRaftingKatunPlacesRender = <Place id={travelId.raftKatunId} places={altaiRaftingKatunPlaces} photo={[points.altaiRaftingKatunPlace1, points.altaiRaftingKatunPlace2, points.altaiRaftingKatunPlace3, points.altaiRaftingKatunPlace4]} />
const kareliaKemPlacesRender = <Place id={travelId.kemId} places={kareliaKemPlaces} photo={[points.kareliaKemPlace1, points.kareliaKemPlace2, points.kareliaKemPlace3]} />
const kareliaSplavChirkaKemDaysRender = <Day id={travelId.splavKemId} days={kareliaSplavChirkaKemDays} photo={[points.kareliaSplavChirkaKemDay1, points.kareliaSplavChirkaKemDay2, points.kareliaSplavChirkaKemDay3, points.kareliaSplavChirkaKemDay4, points.kareliaSplavChirkaKemDay5, points.kareliaSplavChirkaKemDay6, points.kareliaSplavChirkaKemDay7]} />
const solovki23PlacesRender = <Place id={travelId.solovki23Id} places={solovki23Places} photo={[points.solovki23Place1, points.solovki23Place2, points.solovki23Place3, points.solovki23Place4]} />

export { altaiHorseTravelDaysRender, altaiRaftingKatunPlacesRender, kareliaKemPlacesRender, kareliaSplavChirkaKemDaysRender, solovki23PlacesRender }