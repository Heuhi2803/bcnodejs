import styled from 'styled-components'
const Container = styled.div`
height: 30px;
color:white;
background-color: black;
align-items: center;
justify-content: center;
display: flex;
letter-spacing: 2px;
font-size: 12px;
  font-weight: 500;
`;
export const Announcement = () => {
    return (
        <Container>
           SUPPER DEAL ! Free shipping cho hóa đơn từ 5 triệu trở lên...
        </Container>
    )
}
