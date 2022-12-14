import { FormEvent, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Container, FormChat } from "./styles";
interface ChatFooterProps {
  socket: Socket;
}
export function ChatFooter({ socket }: ChatFooterProps) {
  const [message, setMessage] = useState('')

  

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    

    if(message.trim() && localStorage.getItem('USER')){
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('USER'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id
      })
    }
    setMessage('');
    window.scrollTo({top: window.screenY + 300, behavior: 'smooth'});
  }
  return (
    <Container>
      <FormChat onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(ev) => setMessage(ev.target.value)}
        />
        <button type="submit">
          Send
        </button>
      </FormChat>
    </Container>


  )
}