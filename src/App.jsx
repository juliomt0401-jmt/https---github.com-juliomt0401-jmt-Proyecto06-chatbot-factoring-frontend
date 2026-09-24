import './App.css'
import { useState } from 'react'

import LeftSideBar from './components/LeftSideBar'
import ChatPanel from './components/ChatPanel'
import ProcessStatus from './components/ProcessStatus'

function App() {
  const [etapa, setEtapa] = useState('identificacion')
  return (
    <div className="app-layout">
      <LeftSideBar />
      <ChatPanel onEtapaChange={setEtapa} />
      <ProcessStatus etapa={etapa} />
    </div>
  )
}

export default App