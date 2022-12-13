import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Container } from "./styles";
import {useNavigate} from 'react-router-dom'
interface ChatBarProps{
  socket: Socket
}
export function ChatBar({socket}: ChatBarProps){
  const [users, setUsers] = useState<{
    username: string
    id: string
    socketID: string
  }[]>([]);

  const navigate = useNavigate()
  useEffect(()=> {
      socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users])
  return (
    <Container>
      <div className="logo">
        <img src="https://appsgeyser.io/geticon.php?widget=whatsapp%202_13754110&width=512" alt="Zap Zap 2" />
        <h1>Zap Zap 2</h1>
      </div>
      
      <strong>Active Users</strong>
      <div className="users">
      {users.map((user) => (
            <p key={user.socketID}>{user.username}</p>
          ))}
      </div>
    </Container>
  )
}