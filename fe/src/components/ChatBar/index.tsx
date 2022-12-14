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
      socket.on('newUserResponse', (data) => {
        setUsers(data)
      });

      
  }, [socket, users])
  return (
    <Container>
      <div className="logo">
        
        <img src="https://icon-library.com/images/chat-app-icon/chat-app-icon-0.jpg" alt="Openchat App" />
        <strong>Openchat App</strong>
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