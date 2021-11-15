import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";

const Info=styled.div`
  opacity: 0;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color: rgba(0,0,0,0.3);
  z-index:3;
  align-items: center;
  justify-content: center;
  display:flex;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
    display: flex;
    margin: 5px;
    min-height:280px;
    height:350px;
    justify-content: center;
    align-items: center;
    flex:1;
    position: relative;

    &:hover  ${Info}{
        opacity: 1;
    }
`;
const Circle =styled.div`
    width:240px;
    height:250px;
    border-radius: 80%;
    background-color: white;
    position:absolute;
`;
const Image=styled.img`
height:75%;
z-index: 3;
`;

const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition:all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;
export const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to ={`/product/${item._id}`}>
                    <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}
