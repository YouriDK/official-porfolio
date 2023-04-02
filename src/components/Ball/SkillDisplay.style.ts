import styled from 'styled-components';

export const SkillLogo = styled.img`
  margin-top: 15px;
  width: 50%;
  height: 50%;
`;

export const SkillCard = styled.div`
  margin-left: 20px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border-color: white;
  border-style: solid;
  background-color: rgb(29, 24, 54);
  @media ${(props: any) => props.theme.breakpoints.md} {
    margin-top: 20px;
  }
`;

export const SkillText = styled.p`
  color: white;
`;
export const SkillContrainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 25px;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SkillTitleH2 = styled.h2`
  @media ${(props: any) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
`;
export const SkillTitleP = styled.p`
  @media ${(props: any) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
`;
