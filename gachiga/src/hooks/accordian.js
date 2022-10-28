import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const Container =styled.div`
`
export default function ControlledAccordions({category}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 

const FAQcategory1 =[
  {key: 1, title:"Q. 가치가 서비스는 어떤 서비스인가요?", panelNum:"panel1", ariacontrol: "panel1bh-content", headerId: "panel1bh-header", 
  children:`가치가 서비스는 풍부한 경험과 전문성을 갖춘 발품 매니저가 고객님과 함께 부동산 매물을 발품 파는 동행 서비스입니다. 매물 구석구석을 어떻게 확인해야 할지 안내하며 고객님과 공인중개사 간의 소통을 돕는 서비스입니다. 동행 후 확인한 모든 매물에 대해 가치가 페이퍼가 제공됩니다.* 가치가 측에서 제공하는 모든 서비스는 중개 서비스가 아니므로 계약에 개입하지 않습니다.`},
  {key: 2, title:"Q. 가치가 페이퍼는 무엇인가요?", panelNum:"panel2", ariacontrol: "panel2bh-content", headerId: "panel2bh-header", 
  children:"가치가 서비스를 이용하시면 발품 매니저가 고객 여러분과 동행하여 매물을 확인하게 됩니다. 이 때 발품 매니저가 작성하는 가치가 체크리스트와 촬영한 사진 등을 종합하여 전달 드리는 보고서입니다. 가치가 페이퍼를 통해 각 매물에 대한 객관적이고 구체적인 정보를 한눈에 확인하고 편하게 비교해 보실 수 있습니다. 또한, 고객분들을 돕기 위한 계약 관련 법률 사항과 사기 유형 등을 정리하여 함께 보내드립니다. "},
  {key: 3, title:"Q. 매물 확인 후 가치가 페이퍼는 언제 받을 수 있나요?", panelNum:"panel3", ariacontrol: "panel3bh-content", headerId: "panel3bh-header", 
  children:"가치가 페이퍼는 매물 확인 후 24시간 내에 전달됩니다."},
  {key: 4, title:"Q. 가치가 페이퍼를 캡처하거나 친구들에게 나누어 줘도 되나요?", panelNum:"panel4", ariacontrol: "panel4bh-content", headerId: "panel4bh-header", 
  children:"가치가 페이퍼는 서비스 신청자 본인만 보고 활용하셔야 합니다. 무단복제 및 공유는 금지되어 있습니다."},
  {key: 5, title:"Q. 서울이 아니어도 이용할 수 있나요?", panelNum:"panel5", ariacontrol: "panel5bh-content", headerId: "panel5bh-header", 
  children:"현재 가치가 서비스는 서울 전지역을 위주로 운영하고 있습니다. 경기/인천 등 수도권은 구체적인 희망 지역을 문의 주시면, 안내 도와드리겠습니다. 감사합니다. "},
  {key: 6, title:"Q. 내일 방을 보려 하는데 신청 가능할까요?", panelNum:"panel6", ariacontrol: "panel5bh-content", headerId: "panel6bh-header", 
  children:"가치가 서비스는 발품 매니저 매칭을 위해 매물 확인 희망 날짜 최소 2-3일전에 신청 부탁드립니다."},
  {key: 7, title:"Q. 가치가 서비스 이용 시 부동산을 미리 예약해야 하나요? 예약할 때 준비해야 할 사항이 있나요?", panelNum:"panel7", ariacontrol: "panel7bh-content", headerId: "panel7bh-header", 
  children:"부동산은 미리 예약해 주셔야 합니다. 발품 매니저와 매물 확인 시간을 확정하신 후, 매물 찾기를 희망하시는 지역에 있는 부동산에 미리 전화해 해당 시간에 예약을 하셔야 원활한 매물 확인이 가능합니다. "},
  {key: 8, title:"Q. 조건에 맞는 집이 없으면 어떡하나요?", panelNum:"panel8", ariacontrol: "panel8bh-content", headerId: "panel8bh-header", 
  children:"가치가 서비스의 경우, 고객분께서 서비스 이용 전 공인중개사사무소에 연락해 예약을 진행해 주셔야 합니다. 이때 원하시는 조건에 맞는 집이 있는지 부동산 측에 물어 확인해주시면 감사하겠습니다."},
  {key: 9, title:"Q. 서비스 이용 시간이 얼마나 되나요?", panelNum:"panel9", ariacontrol: "panel9bh-content", headerId: "panel9bh-header", 
  children:"발품 매니저의 동행 시간은 ‘부동산을 방문하는 시간 + 매물 하나 당 10~15분’입니다. 평균 전체 이용시간은 60~80분입니다."},
  {key: 10, title:"Q. 서비스 가격이 어떻게 되나요?", panelNum:"panel10", ariacontrol: "panel10bh-content", headerId: "panel10bh-header", 
  children:"서비스 가격은 매물 4개의 경우, 35,000원, 매물 6개의 경우, 50,000원입니다. 현장에서 매물 개수를 추가하시는 경우 매물 1개당 가격은 8,000원입니다. 발품 매니저의 일정 상 현장에서 매물을 추가하는 것이 어려우실 수 있습니다."},
  {key: 11, title:"Q. 취소/환불 조건이 어떻게 되나요?", panelNum:"panel11", ariacontrol: "panel11bh-content", headerId: "panel11bh-header", 
  children:"서비스 환불은 맞춤형 전화상담 당일까지 가능합니다. 전화 상담 익일부터 매물 동행 확인 전날까지는 서비스 금액의 50%만 환불이 가능하며, 매물 동행 확인 당일에는 환불이 불가합니다.매물 확인 날짜는 1회까지만 변경이 가능합니다. 날짜 변경 신청은 기존에 확정한 매물 확인 날짜의 1일 전까지 가능하며, 당일 변경은 어렵습니다. "}
]

const FAQcategory2 =[
  {key: 1, title:"Q. 먼저가는 어떤 서비스인가요?", panelNum:"panel1", ariacontrol: "panel1bh-content", headerId: "panel1bh-header", 
  children: "먼저가 서비스는 풍부한 매물 확인 경험과 전문성을 갖춘 발품 매니저가 고객님을 대신하여 매물을 확인하는 서비스입니다. 확인한 모든 매물에 대한 정보가 가치가 페이퍼로 제공됩니다.* 발품 매니저와의 동행을 원하신다면 ‘가치가 서비스’를 이용해주시기 바랍니다.* 가치가 측에서 제공하는 모든 서비스는 중개 서비스가 아니므로 계약에 개입하지 않습니다."},
  {key: 2, title:"Q. 가치가 페이퍼는 무엇인가요?", panelNum:"panel2", ariacontrol: "panel2bh-content", headerId: "panel2bh-header", 
  children:"발품 매니저가 매물을 확인하며 작성하는 가치가 체크리스트와 촬영한 사진 등을 종합하여 전달 드리는 보고서입니다. 가치가 페이퍼를 통해 각 매물에 대한 객관적이고 구체적인 정보를 한눈에 확인하고 편하게 비교해 보실 수 있습니다. 또한, 고객분들을 돕기 위한 계약 관련 법률 사항과 사기 유형 등을 정리하여 함께 보내드립니다."},
  {key: 3, title:"Q. 매물 확인 후 가치가 페이퍼는 언제 받을 수 있나요?", panelNum:"panel3", ariacontrol: "panel3bh-content", headerId: "panel3bh-header", 
  children:"가치가 페이퍼는 매물 확인 후 24시간 내에 전달됩니다."},
  {key: 4, title:"Q. 가치가 페이퍼를 캡처하거나 친구들에게 나누어 줘도 되나요?", panelNum:"panel4", ariacontrol: "panel4bh-content", headerId: "panel4bh-header", 
  children:"가치가 페이퍼는 서비스 신청자 본인만 보고 활용하셔야 합니다. 무단복제 및 공유는 금지되어 있습니다."},
  {key: 5, title:"Q. 서울이 아니어도 이용할 수 있나요?", panelNum:"panel5", ariacontrol: "panel5bh-content", headerId: "panel5bh-header",
  children:"현재 먼저가 서비스는 서울 전지역을 위주로 운영하고 있습니다. 경기/인천 등 수도권은 구체적인 희망 지역을 문의 주시면, 안내 도와드리겠습니다. 감사합니다. "},
  {key: 6, title:"Q. 내일 방을 봐주셨으면 하는데 신청 가능할까요?", panelNum:"panel6", ariacontrol: "panel5bh-content", headerId: "panel6bh-header", 
  children:"먼저가 서비스는 매물 확인 희망 날짜 최소 2-3일전에 신청 부탁드립니다."},
  {key: 7, title:"Q. 매물을 3개만 보고 싶은데 가능한가요?", panelNum:"panel7", ariacontrol: "panel7bh-content", headerId: "panel7bh-header", 
  children:"서비스 이용을 위한 최소 매물 개수는 4개인 점 양해 부탁드립니다."},
  {key: 8, title:"Q. 조건에 맞는 집이 없으면 어떡하나요?", panelNum:"panel8", ariacontrol: "panel8bh-content", headerId: "panel8bh-header", 
  children:"매물 수요가 급증해 신청한 매물 개수를 확인하는 것이 어려운 시기에는 고객님께서 지정한 공인중개사 사무소 외 다른 공인중개사 사무소도 함께 방문하거나, 불가피한 경우, 환불이 이루어질 수 있습니다."},
  {key: 9, title:"Q. 서비스 이용 가격이 얼마인가요?", panelNum:"panel9", ariacontrol: "panel9bh-content", headerId: "panel9bh-header", 
  children:"서비스 가격은 매물 4개의 경우, 35,000원, 매물 6개의 경우, 50,000원입니다."},
  {key: 10, title:"Q. 취소/환불 조건이 어떻게 되나요?", panelNum:"panel10", ariacontrol: "panel10bh-content", headerId: "panel10bh-header", 
  children:"서비스 환불은 맞춤형 전화상담 당일까지 가능합니다. 전화 상담 익일부터 매물 대리 확인 전날까지는 서비스 금액의 50%만 환불이 가능하며, 매물 대리 확인 당일에는 환불이 불가합니다.매물 확인 날짜는 1회까지만 변경이 가능합니다. 날짜 변경 신청은 기존에 확정한 매물 확인 날짜의 1일 전까지 가능하며, 당일에는 변경이 어렵습니다."}
  ]

  const FAQcategory3 =[
    {key: 1, title:"Q. 발품 매니저는 누구인가요?", panelNum:"panel1", ariacontrol: "panel1bh-content", headerId: "panel1bh-header", 
    children:"발품 매니저는 풍부한 매물 확인 경험과, 가치가 측에서 제공하는 교육을 통해 전문성을 갖춘 인력으로, 부동산 방문 전부터 매물 확인까지 고객님과 함께합니다. 60여가지의 항목으로 구성된 체크리스트 작성과 사진 촬영뿐만 아니라, 고객님께서 궁금한 사항을 공인중개사에게 대신 묻는 등 혼자 매물을 확인하러 갔을 때 놓치기 쉬운 부분을 함께 꼼꼼히 확인합니다."},
    {key: 2, title:"Q. 발품 매니저 교육은 어떻게 진행되나요?", panelNum:"panel2", ariacontrol: "panel2bh-content", headerId: "panel2bh-header", 
    children:"발품 매니저 교육은 2시간 30분씩 2차시, 총 5시간이 이루어집니다. 중개보조원 직무교육을 바탕으로 체크리스트 작성법과 서비스 시뮬레이션까지 진행하며 실무를 위한 준비를 하게 됩니다."}
  ]

  const FAQcategory4 =[
    {key: 1, title:"Q. 자취방 계약이 처음인데, 계약 후에 진행해야 하는 일이 있나요?", panelNum:"panel1", ariacontrol: "panel1bh-content", headerId: "panel1bh-header", 
    children:"자취방을 계약하여 입주하신 후에는, 새로 살게 된 지역의 관할 기관에 ‘전입신고’를 해주셔야 합니다. 전입신고일 다음날 0시부터 효력이 발휘되는 대항력을 갖추어야 집주인이 바뀌어도 계약 기간동안 문제없이 거주할 수 있습니다. 더 구체적인 정보를 위해서는 가치가 블로그(https://blog.naver.com/gachiga_home)와 인스타그램(@ggami.home)을 확인해보세요."},
    {key: 2, title:"Q. 조건에 맞는 집이 없으면 어떡하나요?", panelNum:"panel2", ariacontrol: "panel2bh-content", headerId: "panel2bh-header", 
    children:"예약하신 부동산에 조건에 맞는 매물이 전혀 없는 경우, 바로 다른 부동산으로 이동할 수 있도록 도와드립니다. * 다만, 고객님의 편의를 위하여 부동산 예약 시, 원하시는 조건에 맞는 매물이 있는지 해당 부동산에 간단히 질문하여 확인해보시는 것을 권장 드립니다. 해당 부동산에서 발품 매니저와 동행하여 매물 확인을 한 후 마음에 드는 매물을 찾지 못하신 경우, 가치가 서비스 이용과는 무관한 부분이므로 환불이 어려운 점 양해 부탁드립니다. "}
  
  ]

let items = FAQcategory1;

if(category==="category1"){
    items = FAQcategory1;
}else if(category==="category2"){
    items = FAQcategory2;
}else if(category==="category3"){
    items = FAQcategory3;
}else if(category==="category4"){
    items = FAQcategory4;
}


    return(  
        <div>
          {items.map(item => {
            const panelNum =item.panelNum;
            return(
                <Accordion expanded={expanded === panelNum } onChange={handleChange( panelNum )} key={item.key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={item.ariacontrol}
                  id={item.headerId} >
                  <Typography sx={{ width: '50vw;', flexShrink: 0 }}>
                  {item.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  {item.children}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
      
    );
} 