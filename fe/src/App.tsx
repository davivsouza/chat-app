import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { ChatPage } from "./pages/ChatPage"
import { Home } from "./pages/Home"
import { GlobalStyles } from "./styles/global"
import io from 'socket.io-client'

const socket = io('http://localhost:3001', {
  transports: ['websocket']
})
function App() {
 

 
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home socket={socket}/>}/> 
          <Route path="/open-chat" element={ <ChatPage socket={socket}/>}/> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
