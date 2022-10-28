import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';
import TeamMain from "../components/team/TeamMain"
import TeamMission from "../components/team/TeamMission";
import TeamVision from "../components/team/TeamVision";
import TeamPeople from "../components/team/TeamPeople";
import TeamNews from "../components/team/TeamNews";
const Container = styled.div`

  background-color: #fff;
`;

function Team() {
  return (
    <Container>
      <Header />
      <TeamMain />
      <TeamMission />
      <TeamVision />
      <TeamPeople />
      <TeamNews />
      <Footer />
    </Container>
  );
}

export default Team;