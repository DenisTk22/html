import './App.css'
import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import Camping from './components/Camping'
import IntroSection from './components/IntroSection'
import { Fragment, useState } from 'react'
import TabSection from './components/TabSection'
import FeedbackSection from './components/FeedbackSection'

export default function App() {

  //для отработки TabSection
  const [tab, setTab] = useState('main')

  return (
    <Fragment> {/**<Fragment></Fragment> не создает дополнительный блок, как если бы стоял <div> ИЛИ вместо можно использовать пустой тег <></> */}
      <Header />
      <main>
        <IntroSection/>

        <TabSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
          <>
            <TeachingSection />
            <Camping />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}
      </main>
    </Fragment>
  )
}