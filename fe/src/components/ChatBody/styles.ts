import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
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
    color: #000;
    margin-bottom: 8px;
  }
`;

export const MessageSender = styled.div`
 margin-bottom: 24px;
 
  p{
    background: #219ebc;
    text-align: left;
    border-radius: 30px;
    border: none;
    padding: 12px;
    color: #fff;
    position: absolute;
    max-width: 300px;
    word-wrap: break-word;
    right: 20px;
  }
  `;

export const RecipientSender = styled.div`
    margin-bottom: 24px;
  p{
    background: #90e0ef;
    border-radius: 30px;
    border: none;
    padding: 12px;
    margin-top: 8px;
    color: #000;
    position: absolute;
    max-width: 300px;
    word-wrap: break-word ;
    left: 20px;
  }
`;