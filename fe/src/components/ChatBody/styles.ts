import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background: #242423;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  background-image: url('https://i.scdn.co/image/ab67616d0000b27396143f571be5f469cbcfa778');
  background-size: cover;
  background-repeat: no-repeat;
  background-position:  center;
  background-attachment: fixed;
  
`;

export const MessageContainer = styled.div`
  padding: 24px;
  position: relative;
  display: flex;
`;

export const ChatMessage = styled.div`
  & +& {
    margin-top: 50px;
 }
  &.you{
    text-align: right;
    }

  p{
    color: #fff;
    margin-bottom: 8px;
  }
`;

export const MessageSender = styled.div`
 margin-bottom: 24px;
 
  p{
    background: #000;
    text-align: left;
    border-radius: 30px;
    border: 2px solid #ffd60a;
    padding: 12px;
    color: #fff;
    width: 300px;
    position: absolute;
    right: 20px;
  }
  `;

export const RecipientSender = styled.div`
    margin-bottom: 24px;
  p{
    background: #ffd60a;
    border-radius: 30px;
    border: 2px solid #000;
    padding: 12px;
    margin-top: 8px;
    color: #000;
    width: 300px;
    position: absolute;
    left: 20px;
  }
`;