import styled from "styled-components";
import { mobile } from "../responsive";

const Container=styled.div`
 width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.etsystatic.com/12324116/r/il/2ba86a/1906194298/il_fullxfull.1906194298_6w84.jpg")
      bottom;
      display: flex;
      align-items: center;
      justify-content: center;
`;
const Wrapper= styled.div`
    padding:20px;
    width:45%;
    background-color: #e2eff3;
    ${mobile({ width: "75%" })}
`;
const Title= styled.h1`
    padding:2px;
    font-weight: 200;
`;
const Form= styled.form`
    display:flex;
    flex-wrap: wrap;
`;
const Input= styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;
const Agreement=styled.span`
   font-size: 12px;
   margin: 20px 0px;
`;
const Button=styled.button`
    width: 40%;
    border:none;
    padding: 15px;
    background-color: teal;
    color:white;
    
`;
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>TẠO TÀI KHOẢN</Title>
                <Form>
                    <Input placeholder="Tên"/>
                    <Input placeholder="Họ"/>
                    <Input  placeholder="Username"/>
                    <Input  placeholder="Email"/>
                    <Input  placeholder="Password"/>
                    <Input  placeholder="Nhập Lại Password"/>
                    <Agreement>Bằng cách tạo một tài khoản, tôi đồng ý với việc xử lý dữ liệu phù hợp với <b> CHÍNH SÁCH BẢO MẬT </b> 
                    </Agreement>
                    <Button>ĐĂNG KÝ</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register