import styled from "styled-components";

export const Container = styled.aside`
  background-color: #0b090a;
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100vh;
  width: 540px;
 
  .logo{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    img{
      width: 50px;
    }
    h1{
      color: #ffd60a;
      font-size: 32px;
    }

    
  }
  strong{
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
  }
  
  .users{
    p{
      color: #fff;
      margin-top: 8px;
    }
  }`
;