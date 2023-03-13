import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import styled from 'styled-components';
import { sliderItems } from '../pages/data';
import image from '../image.png';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    background-color: ${props => props.bg}
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100
    background-color: ${props => props.bg}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
    height: 80%;
    margin-left: 100px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px; 
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left") }>
            <ArrowLeftOutlined />
            </Arrow>
                {sliderItems.map((item) => (
                <Wrapper slideIndex={slideIndex} bg={item.bg}>
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={image} alt= "image" />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Know More</Button>
                        </InfoContainer>
                    </Slide>
                </Wrapper>
                ))}
          
            <Arrow direction="right"  onClick={()=> handleClick("right") }>
                <ArrowRightOutlined />
            </Arrow>
            
        </Container>
    )
}

export default Slider
