import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomDots from "../hooks/CustomDots.css";

const Container = styled.div`
  overflow:hidden;
`;
const StyledSlider = styled(Slider)`
.slick-slide div{
  outline:none;
}

`;
const ImageContainer = styled.div`
  justify-content: center;
`;
const Image = styled.img`
  width:20vw;
  filter: drop-shadow(0.25vw 0.25vw 0.25vw #111);
  @media screen and (max-width: 768px) {
    width: 330px;
    } 
`;

const imgUrl1 = process.env.PUBLIC_URL + '/img/homepage4_1_1.jpg';
const imgUrl2 = process.env.PUBLIC_URL + '/img/homepage4_1_2.jpg';
const imgUrl3 = process.env.PUBLIC_URL + '/img/homepage4_2_1.jpg';
const imgUrl4 = process.env.PUBLIC_URL + '/img/homepage4_2_2.jpg';
const imgUrl5 = process.env.PUBLIC_URL + '/img/homepage4_3_1.jpg';
const imgUrl6 = process.env.PUBLIC_URL + '/img/homepage4_3_2.jpg';

const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl3 },
  { id: 4, url: imgUrl4 },
  { id: 5, url: imgUrl5 },
  { id: 6, url: imgUrl6 },

];


export default class PaperSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '2vw',
      autoplay:true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5vw',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container>
        <StyledSlider {...settings} >
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer dotsClass>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
      
    );
  }
}