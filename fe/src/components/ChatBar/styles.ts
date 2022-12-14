import styled from "styled-components";

export const Container = styled.aside`
  background-color: #1d3557;
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100vh;
  max-width: 180px;
  flex-shrink: 1;
  flex-grow: 1;
  .logo{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    img{
      width: 30px;
    }
    strong{
      color: #fff;
      font-size: 16px;
    }

    
  }
  strong{
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
  }
  
  .users{
    p{
      color: #ccc;
      margin-top: 8px;
    }
  }`
;