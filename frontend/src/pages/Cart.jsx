import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
import {removeProduct} from '../redux/cartRedux';
import { Link } from 'react-router-dom';
const Container = styled.div`
`;
const Wrapper= styled.div`
     padding:20px;
     ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
    font-weight: 200;
    text-align:center;
`;
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts=styled.div``;

const TopText=styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin-left: 20px;
    ${mobile({ display: "none" })}
`;
const Bottom = styled.div`
   display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const Info=styled.div` 
    flex:3;
`;
const Product=styled.div`
    display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const ProductDetail=styled.div`
    flex:2;
    display:flex;
`;
const Image=styled.img`
width:200px;
`;
const Detail=styled.div`
    padding:25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName=styled.span`
`;

const ProductId=styled.span``;

const ProductColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${(props)=>props.color};
`;
const ProductSize=styled.span``;

const PriceDetail=styled.div`
     flex:1;
     display:flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
`;
const ProductAmountContainer=styled.div`
    display:flex;
    align-items: center;
`;
const ProductAmount=styled.div`
    font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;
const ProductPrice=styled.div`
    font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`;
const Hr=styled.hr`
    background-color: lightgray;
    border: none;
    height: 2px;
`;
const Summary= styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50hv;
`;
const SummaryTitle= styled.h2`
    font-weight: 200;
`;
const SummaryItem= styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`;
const SummaryItemText=styled.span``;
const SummaryItemPrice =styled.span``;
const Button=styled.button`
    background-color: black;
    color:white;
    width:100%;
    padding:12px;
    margin: auto;
    cursor: pointer;
`;
const Cart = () => {
    const KEY="pk_test_51JqvY0AySDCnWl18Wb9B6UYNAPB3tlh6qVMMVDzTMcMYIN0heMVNitlKBvy53zCKbkZLbuQoHIB572K8K1JzzG2v00uuOTNarF";
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const dispatch=useDispatch();
    const onToken = (token)=>{
        setStripeToken(token);
    };
    useEffect(() => { 
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: 500,
            });
            history.push("/success",{data:res.data});
          } catch {}
        };
        stripeToken  && makeRequest();
      }, [stripeToken, cart.total, history]);
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>GI??? H??NG C???A B???N</Title>
                <Top>
                <Link to="/">
                    <TopButton>TI???P T???C MUA S???M</TopButton>
                    </Link> 
                    <TopTexts>
                        <TopText>Y??u Th??ch(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                       
                        {cart.products.map(product=>(
                            <Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Detail>
                                    <ProductName> <b>Product: </b>{product.title} </ProductName>
                                    <ProductId><b>ID: </b>{product._id}</ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>K??ch Th?????c: </b>{product.size}</ProductSize>
                                </Detail>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove   />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))};
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>T???ng ????n h??ng</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>T???m T??nh: </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Ph?? V???n Chuy???n</SummaryItemText>
                            <SummaryItemPrice>$2</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Gi???m Gi?? V???n Chuy???n</SummaryItemText>
                            <SummaryItemPrice>-$2</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem typle="total">
                            <SummaryItemText >T???ng Ti???n: </SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
              name="Heu&Eng Shop"
              image="https://i.pinimg.com/564x/63/f6/87/63f687662a5a17ee1fe3b1d25db4dfd6.jpg"
              billingAddress
              shippingAddress
              description={`S??? ti???n c???a b???n l?? $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
