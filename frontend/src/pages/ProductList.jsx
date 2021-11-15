import styled from 'styled-components'
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Newletter } from '../components/Newletter';
import { Products } from '../components/Products';
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from 'react';

const Container = styled.div``;
const Title =styled.h1`
    margin:20px;
    font-size: 40px;
`;
const FilterContainer= styled.div`
    display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`;
const FilterText=styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
  ${mobile({ marginRight: "0px" })};
`;
const Select=styled.select`
    padding: 8px;
    margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
`;
const Option=styled.option`

`;
export const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilters]=useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
    return (
        <Container>
            <Navbar/>
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Sản Phẩm:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >
                           Màu Sắc
                        </Option>
                        <Option>lightgray</Option>
                        <Option>tan</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>lightcoral</Option>
                        <Option>lightblue</Option>
                        <Option>teal</Option>
                        <Option>yellow copper</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >
                            Kích Thước
                        </Option>
                        <Option>Lớn</Option>
                        <Option>Vừa</Option>
                        <Option>Nhỏ</Option>
                    </Select>
                </Filter>
                
                <Filter> 
                    <FilterText>Sắp xếp:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Mới nhất</Option>
                        <Option value="asc">Giá (tăng dần)</Option>
                        <Option value="desc">Giá (giảm dần)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newletter/>
            <Footer/>
        </Container>
    )
}
export default ProductList;