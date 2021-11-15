import { useState } from 'react';
import styled from 'styled-components'
import {mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux"
import { login } from '../redux/apiCalls';
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
     rgba(255, 255, 255, 0.5),
     rgba(255, 255, 255, 0.5)
   ),
   url("https://i.pinimg.com/originals/80/cf/ce/80cfcee47246ef09a1bea70b2b77a153.jpg")
    center;
     display: flex;
     align-items: center;
     justify-content: center;
`;
const Wrapper= styled.div`
   padding:20px;
   width:25%;
   background-color: #e2eff3;
  ${mobile({ width: "75%" })}
`;
const Title= styled.h1`
   padding:2px;
   font-weight: 200;
`;
const Form= styled.form`
   display:flex;
  flex-direction: column;
`;
const Input= styled.input`
   flex:1;
   min-width:25%;
   margin:10px ;
   padding:10px;
`;
const Button=styled.button`
     width: 40%;
  border: none;
  margin:auto;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link=styled.a`
    margin: 5px 5px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Error=styled.span`
color:red;
`;
const Login = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching,error}= useSelector((state)=> state.user);

  const handleClick = (e) => {
   e.preventDefault();
   login(dispatch,{username,password});
  };
    return (
        <Container>
            <Wrapper>
            <Title>ĐĂNG NHẬP</Title>
                <Form>
                    <Input placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input  placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching} >ĐĂNG NHẬP</Button>
                   {error && <Error> Có vẻ như có lỗi đăng nhập đang xảy ra.....</Error>}
                   <Link>Quên Mật Khẩu?</Link>
                   <Link> Tạo Tài Khoản Mới</Link>
                    
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
