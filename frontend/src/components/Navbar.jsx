import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 50px;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding:  10px 20px;
    display:flex;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;
const Left= styled.div`
    flex:1;
    display:flex;
    align-items: center;
`;
const Language= styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchContainer= styled.div`
    border:0.5px solid lightgray;
    margin-left: 25px;
    padding: 2px;
    display: flex;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo= styled.div`
    font-size: 28px;
    font-weight: bolder;

`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
                     
export const Navbar = () => {
    const quantity =useSelector(state=>state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Tìm Kiếm..."/>
                        <Search style= {{color:"blue", fontSize:18}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>HEU&ENG</Logo>
                </Center>
                <Right>
                    <Link to="/login">
                        <MenuItem> Đăng Nhập</MenuItem>
                    </Link>
                    <Link to="/register">
                        <MenuItem>Đăng Ký</MenuItem>
                    </Link>
                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined color="action" />
                    </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}
