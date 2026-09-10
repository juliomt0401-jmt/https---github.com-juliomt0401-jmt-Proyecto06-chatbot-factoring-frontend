import './App.css'

import LeftSideBar from './components/LeftSideBar'
import ChatPanel from './components/ChatPanel'
import ProcessStatus from './components/ProcessStatus'

function App() {
  return (
    <div className="app-layout">
      <LeftSideBar />
      <ChatPanel />
      <ProcessStatus />
    </div>
  )
}

export default App