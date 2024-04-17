import styled from 'styled-components';

export const ProjectSectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props: any) => (props.main ? '65px' : '56px')};
  line-height: ${(props: any) => (props.main ? '72px' : '56px')};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props: any) => (props.main ? '58px 0 16px' : '0')};

  @media ${(props: any) => props.theme.breakpoints.md} {
    font-size: ${(props: any) => (props.main ? '56px' : '48px')};
    line-height: ${(props: any) => (props.main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${(props: any) => (props.main ? '40px 0 12px' : '0')};
    width: ${(props: any) => (props.main ? 'max-content' : '100%')};
    text-align: ${(props: any) => (props.main ? 'unset' : 'center')};
  }

  @media ${(props: any) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props: any) => (props.main ? '28px' : '32px')};
    line-height: ${(props: any) => (props.main ? '32px' : '40px')};
    width: ${(props: any) => (props.main ? 'max-content' : '100%')};
    text-align: ${(props: any) => (props.main ? 'unset' : 'center')};
    margin-bottom: 8px;
    padding: ${(props: any) => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;

export const EnvironnementCard = styled.div`
  border-radius: 10px;
  background: rgb(29, 24, 54);
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;

  width: 400px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    margin: 3rem;
    margin-bottom: 2rem;
  }
`;
export const TaskCard = styled.div`
  background: rgb(29, 24, 54);
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 800px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    margin: 3rem;
    margin-bottom: 2rem;
  }
`;
export const EnvironnementCardTitleContent = styled.div`
  margin-top: 20px;
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-bottom: 40px;
`;

export const EnvironnementCardHeader = styled.h3<{ title?: any }>`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const EnvironnementPoints = styled.li`
  color: white;
  margin-top: 15px
  font-size: 14px;
  padding-left: 10px;
  letter-spacing: 0.05em;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
  }
`;
export const EnvironnementPointsArray = styled.ul`
  margin-top: 3rem;
  margin-left: 3rem;
  margin-top: 0.5rem;
`;
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  flex-direction: row;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const ProjectDescriptionDiv = styled.div`
  width: 100%;
  margin-top: 20px;
  font-family: 'SpaceGrotesk';
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem;
  }
`;
