import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import TimeLineCss from "../hooks/TimeLine.css";


function MeonjeogaTimeLine(){
  return (
    <Container>
        <section className="ps-timeline-sec">
        <div className="container">
            <ol className="ps-timeline">
                <li>
                    <div className="img-handler-top">
                        <img src={process.env.PUBLIC_URL + '/img/service_store.png'} alt=""/>
                    </div>
                    <div className="ps-bot">
                        <p>스마트스토어 통해<br/>이용료 결제</p>
                    </div>
                    <span className="ps-sp-bot">01</span>
                </li>
                <li>
                    <div className="img-handler-top">
                    <img src={process.env.PUBLIC_URL + '/img/service_advice.png'} alt=""/>
                    </div>
                    <div className="ps-bot">
                        <p>유선으로 진행되는<br/>맞춤형 상담</p>
                    </div>
                    <span className="ps-sp-bot">02</span>
                </li>
                <li>
                    <div className="img-handler-top">
                    <img src={process.env.PUBLIC_URL + '/img/service_match.png'} alt=""/>
                    </div>
                    <div className="ps-bot">
                        <p>매니저 매칭</p>
                    </div>
                    <span className="ps-sp-bot">03</span>
                </li>
                <li>
                    <div className="img-handler-top">
                    <img src={process.env.PUBLIC_URL + '/img/service_paper.png'} alt=""/>
                    </div>
                    <div className="ps-bot">
                        <p>매물 사전 점검</p>
                    </div>
                    <span className="ps-sp-bot">04</span>
                </li>
                <li>
                    <div className="img-handler-top">
                    <img src={process.env.PUBLIC_URL + '/img/service_send.png'} alt=""/>
                    </div>
                    <div className="ps-bot">
                        <p>가치가 페이퍼 전송</p>
                    </div>
                    <span className="ps-sp-bot">05</span>
                </li>
                
            </ol>
        </div>
    </section>
    </Container>
    
  );
};

export default MeonjeogaTimeLine;

const Container = styled.div`
  color: #fafafa;
  max-width: 90vw;
  margin-left: 13vw;
  margin-right :11vw;
  background: #fafafa;
  box-sizing: border-box;
`
