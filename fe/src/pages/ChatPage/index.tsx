import { useEffect, useRef, useState } from 'react'
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

  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    socket.on('messageResponse', (data) => setMessages([...messages,data]))
  }, [socket, messages]);

  useEffect(()=>{
     lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages])

  return (
    <Container>
      <ChatBar socket={socket}/>
      <div>
        <ChatBody messages={messages} lastMessageRef={lastMessageRef}/>
        <ChatFooter socket={socket}/>
      </div>
    </Container>
  )
}