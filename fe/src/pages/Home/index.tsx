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
    socket.emit('newUser',{ username, socketID: socket.id })
    navigate('/open-chat')
  }
  
  return (
    <Container>
      <UserForm onSubmit={handleSubmit}>
        <h2>Avatar</h2>
        <img src="https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg" alt="Gigachad" />
        <input
          type="text"
          placeholder="Your username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)} />
        <button type="submit">
          Entrar no Zap Zap 2
        </button>
      </UserForm>
    </Container>
  )
}