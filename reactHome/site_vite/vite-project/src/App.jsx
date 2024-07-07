import './App.css'
import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import Camping from './components/Camping'
import IntroSection from './components/IntroSection'
import { Fragment } from 'react'

export default function App() {

  return (
    <Fragment> {/**<Fragment></Fragment> не создает дополнительный блок, как если бы стоял <div> ИЛИ вместо можно использовать пустой тег <></> */}
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <Camping />
      </main>
    </Fragment>
  )
}