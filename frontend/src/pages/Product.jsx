import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Newletter } from '../components/Newletter';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requestMethods';
import { mobile } from "../responsive";

const Container=styled.div``;

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({ padding: "10px", flexDirection:"column" })};
   // background-color:lightblue;
`;
const ImageContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })};
`;
const InfoContainer = styled.div`
     flex:1;
     padding: 0px 20px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight:100;
    font-size: 30px;
`;
const  FilterContainer=styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};

`;
const  Filter=styled.div`
    display:flex;
    align-items:center;
`;
const  FilterTitle=styled.span`
    
    font-weight: 200;
`;
const  FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid gray;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const  FilterSize = styled.select`
    margin-left: 10px;
    display: flex;
    padding: 4px;
`;
const AddContainer = styled.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({ width: "100%" })}
`;
const AmountContainer=styled.div`
   display: flex;
   font-weight:700;
   align-items: center;
`;
const Amount =styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items:center;
    justify-content: center;
    margin: 0px 5px;
    display:flex;
`;
const Button = styled.button`
    padding:15px;
    border:2px solid lightblue;
    background-color: white;
    cursor: pointer;
    font-weight: bolder;

    &:hover{
        background-color: #8bc5d3;
    }
`;
const  FilterSizeOption = styled.option``;

export const Product = () => {
     const location = useLocation();
     const id= location.pathname.split("/")[2];
     const [product,setProduct]=useState({});
     const [quantity,setQuantity]=useState(1);
     const [color,setColor]=useState("");
     const [size,setSize]=useState("");
     const dispatch=useDispatch();
     
     useEffect(()=>{
         const getProduct= async()=>{
             try{
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
             }catch{}
         };
         getProduct();
     },[id]);
     
     const handleQuatity = (type)=>{
         if(type==="dec"){
            quantity>1 && setQuantity(quantity-1);
         }
         else{
            setQuantity(quantity+1);
         }
     }
      
     const handleClick =()=>{
         dispatch( addProduct({...product,quantity,color ,size}));
     };
     const onaddCart =()=>{
         dispatch({type:'ADDCART',...product})
     }
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c)=>(
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                        ))}
                           
                        </Filter>
                        <Filter>
                            <FilterTitle>Kích Thước: </FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s)=>(
                            <FilterSizeOption key={s}>{s}</FilterSizeOption>
                        ))}
                                
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuatity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuatity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>THÊM VÀO GIỎ HÀNG</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newletter/>
            <Footer/>
        </Container>
    )
}
export default Product;
