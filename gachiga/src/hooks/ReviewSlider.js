import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
  width:35.5vw;
`;

const imgUrl1 = process.env.PUBLIC_URL + '/img/review.png';
const imgUrl2 = process.env.PUBLIC_URL + '/img/review.png';
const imgUrl3 = process.env.PUBLIC_URL + '/img/review.png';


const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl3 },


];


export default class PaperSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: "1vw",

      autoplay:true,
      autoplaySpeed: 1800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '2vw',
            slidesToShow: 1
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