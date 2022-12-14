import { useEffect } from "react";
import { ChatMessage, Container, MessageContainer, MessageSender, RecipientSender } from "./styles";


interface ChatBodyProps {
  messages: {
    text: string
    name: string
    id: string
    socketID: string
  }[]
  lastMessageRef:  React.RefObject<HTMLDivElement>
}

export function ChatBody({ messages, lastMessageRef }: ChatBodyProps) {
 

  return (
      <Container >
        <MessageContainer >
        {messages.map(message => 
          message.name === localStorage.getItem('USER') ? (
              <ChatMessage className="you" key={message.id}>
              <p>You</p>
                <MessageSender>
                  <p>{message.text}</p>
                </MessageSender>
              </ChatMessage>
          ) : (
              <ChatMessage key={message.id}>
                <p>{message.name}</p>
                <RecipientSender>
                  <p>{message.text}</p>
                </RecipientSender>
              </ChatMessage>
        )
        )}
        <div ref={lastMessageRef}/>

        </MessageContainer>
      
      </Container>
    

  )
}