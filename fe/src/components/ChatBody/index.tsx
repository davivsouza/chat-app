import { ChatMessage, Container, MessageContainer, MessageSender, RecipientSender } from "./styles";


interface ChatBodyProps {
  messages: {
    text: string
    name: string
    id: string
    socketID: string
  }[]
}

export function ChatBody({ messages }: ChatBodyProps) {


  return (
      <Container >
        <MessageContainer>
        {messages.map(message => 
          message.name === localStorage.getItem('USER') ? (
              <ChatMessage className="you">
              <p>{message.name}</p>
                <MessageSender>
                  <p>{message.text}</p>
                </MessageSender>
              </ChatMessage>
          ) : (
              <ChatMessage>
                <p>{message.name}</p>
                <RecipientSender>
                  <p>{message.text}</p>
                </RecipientSender>
              </ChatMessage>
        )
        )}
        </MessageContainer>
      
      
      </Container>
    

  )
}