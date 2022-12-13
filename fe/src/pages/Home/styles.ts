import styled from 'styled-components'

export const Container = styled.div`
  width:100vw;
  height:100vh;
  background-image: url('https://i.scdn.co/image/ab67616d0000b27396143f571be5f469cbcfa778');
  background-size: contain;
  background-position: top center;
  background-color: #000;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;`;


export const UserForm = styled.form`
  width: 300px;
  margin: auto;
  background: #fff;
  border-radius: 30px;
  padding: 24px 12px  ;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  input{
    width: 90%;
    padding: 8px 12px;
    outline: none;
    border: 1px solid #ccc;

    ::placeholder{
      color: #ccc;
    }
  }

  button{
    padding: 12px 16px;
    border-radius: 20px;
    border: none;
    color: #fff;
    background: #ffba08; 
    cursor: pointer;
  }
`;