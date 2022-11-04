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
  @media screen and (max-width: 768px) {
    width:75vw;
    } 
`;

const imgUrl1 = process.env.PUBLIC_URL + '/img/news.jpeg';
const imgUrl2 = process.env.PUBLIC_URL + '/img/comingsoon.jpeg';
const imgUrl3 = process.env.PUBLIC_URL + '/img/news.jpeg';
const imgUrl4 = process.env.PUBLIC_URL + '/img/comingsoon.jpeg';


const items = [
  { id: 1, url: imgUrl1, href:"http://www.dailypop.kr/news/articleView.html?idxno=63755" },
  { id: 2, url: imgUrl2, href: "javascript:void(0)"},
  { id: 3, url: imgUrl3, href: "http://www.dailypop.kr/news/articleView.html?idxno=63755"},
  { id: 4, url: imgUrl4, href: "javascript:void(0)"}
];


export default class NewsSlider extends Component {
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

      autoplay:false,
      autoplaySpeed: 1800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "-15vw",
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
                <ImageContainer sdotsClass>
                  <a href={item.href} target="_blank"><Image src={item.url} /></a>
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
      
    );
  }
}