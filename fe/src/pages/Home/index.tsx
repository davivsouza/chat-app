import { FormEvent, useState } from "react";
import { Container, UserForm } from "./styles";
import { useNavigate } from 'react-router-dom';
import { Socket } from "socket.io-client";
interface HomeProps{
  socket: Socket
}
export function Home({socket}: HomeProps) {
  const [username, setUsername] = useState('')
  const navigate = useNavigate();

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    localStorage.setItem('USER', username)
    localStorage.setItem('socketID', socket.id)
    socket.emit('newUser',{ username, socketID: socket.id })
    navigate('/open-chat')
  }
  
  return (
    <Container>
      <UserForm onSubmit={handleSubmit}>
        <h2>Openchat App</h2>
        <img src="https://icon-library.com/images/chat-app-icon/chat-app-icon-0.jpg" alt="Openchat App" />
        <input
          type="text"
          placeholder="Your username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)} />
        <button type="submit">
          Entrar no Chat
        </button>
      </UserForm>
    </Container>
  )
}