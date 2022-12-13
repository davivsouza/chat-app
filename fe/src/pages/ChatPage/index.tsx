import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { ChatBar } from '../../components/ChatBar'
import { ChatBody } from '../../components/ChatBody'
import { ChatFooter } from '../../components/ChatFooter'
import {Container} from './styles'

interface ChatPageProps{
  socket: Socket;
  
}

export function ChatPage({socket}: ChatPageProps){
  const [messages, setMessages] = useState<{
    text: string
    name: string
    id: string
    socketID: string
  }[]>([])
  useEffect(()=>{
    socket.on('messageResponse', (data) => setMessages([...messages,data]))
  }, [socket, messages])
  return (
    <Container>
      <ChatBar socket={socket}/>
      <div>
        <ChatBody messages={messages}/>
        <ChatFooter socket={socket}/>
      </div>
    </Container>
  )
}