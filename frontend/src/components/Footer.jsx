import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container= styled.div`
    display: flex;
    background-color:black;
    ${mobile({ flexDirection: "column" })}
`;
const Left =styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;
const Logo= styled.h1`
    color:white;
`;

const Desc=styled.p`
    margin:20px 0px;
    color:white;
`;

const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    color:white;
    background-color: #${prop=>prop.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const SocialContainer =styled.div`
    display:flex;
`;
const Center= styled.div`
    flex:1;
    padding:20px;
    ${mobile({ display: "none" })}
`;
const Title=styled.h3`
    margin-bottom:30px;
    color:white;
`;

const List= styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap :wrap;
`;

const ListItem=styled.li`
    width:50%;
    margin-bottom: 10px;
    color:white;
`;
const Right= styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactContainer= styled.div`
`;

const ContactItem=styled.div`
    align-items: center;
    margin-bottom: 10px;
    display:flex;
    color:white;
`;

const Payment=styled.img`
    width:50%;
`;
export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>HEU&ENG</Logo>
                {/* <Desc>Vẻ đẹp đến từ sự đơn giản, thuần khiết. Nếu bạn đang phải chịu nhiều áp lực, áp lực cuộc sống thì hãy sống, tìm đến ngôi nhà thật tối giản, tinh tế và nhiều cây xanh. Với sự đơn giản và tinh tế, phong cách nội thất này sẽ mang đến những điều hoàn toàn khác biệt và mới lạ không ngờ..</Desc>
                */}
                  <Desc>Với sự đơn giản và tinh tế, phong cách nội thất của <span style= {{color:"red", fontWeight:'bolder'}}>HEU&ENG</span> sẽ mang đến những điều hoàn toàn khác biệt và mới lạ không ngờ..</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E440F5">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Liên kết tiện ích</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Giỏ Hàng</ListItem>
                    <ListItem>Bàn Ăn</ListItem>
                    <ListItem>Ghế Ngồi</ListItem>
                    <ListItem>Giường Ngủ</ListItem>
                    <ListItem>Tủ- Kệ</ListItem>
                    <ListItem>Trang Trí</ListItem>
                    <ListItem>Tài Khoản</ListItem>
                    <ListItem>Hỗ Trợ</ListItem>
                    <ListItem>Điều Khoản</ListItem>
                </List>

            </Center>
            <Right>
                <Title>LIÊN HỆ </Title>
                <ContactContainer>
                    <ContactItem><Room style={{marginRight:'10px'}}/> 43 Cổ Nhuế, Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội</ContactItem>
                    <ContactItem><Phone style={{marginRight:'10px'}}/> 0389872522</ContactItem>
                    <ContactItem><MailOutlined style={{marginRight:'10px'}}/> heukendyss123@gmail.com</ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
                </ContactContainer>
            </Right>
        </Container>
    )
}
