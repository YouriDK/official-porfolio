import styled from 'styled-components';

export const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
  border-radius: 50px;
`;
export const ImageWork = styled.img`
  max-width: 60px;
  max-height: 60px;
  border-radius: 25px;
  @media ${(props: any) => props.theme.breakpoints.md} {
    max-width: 45px;
    max-height: 45px;
  }
  @media ${(props: any) => props.theme.breakpoints.lg} {
    max-width: 50px;
    max-height: 50px;
  }
  @media ${(props: any) => props.theme.breakpoints.sm} {
    max-width: 40px;
    max-height: 40px;
  }
`;
