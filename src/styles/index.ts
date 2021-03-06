import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.black100};
`

export const BannerSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 120vh;

  @media(max-width: 1440px){
     min-height: 90vh;
  } 
  @media(max-width: 1080px){
    min-height: 56vh;
  }
  @media(max-width: 720px){
    min-height: 40vh;
  }
`;

export const BannerSectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url("/images/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
`;


export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.white100};
  margin-top: -40px;
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
  width: 1900px;
  margin: 0 auto;
  padding: 40px;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  width: 50%;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
  }
  & p {
    color: ${({ theme }) => theme.colors.black500};
    margin: 24px auto;
  }
  @media (max-width: 1080px) {
    width: 100%;
    padding: 16px;
    & h1 {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
    & h1 {
      text-align: center;
    }
  }
`;
export const IntroductionSectionImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 40px;
  width: 50%;
  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 16px;
    justify-content: center;
  }
`;

export const MetricsSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 64vh;
  background: -webkit-linear-gradient(-20deg, rgb(0, 194, 255), rgb(0, 225, 212));
  background: linear-gradient(-20deg, rgb(0, 194, 255), rgb(0, 225, 212));
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
    margin-bottom: 40px;
    @media (max-width: 1080px) {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const CountUpGroupContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
  }
`;
export const CountUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 320px;
  margin: 0 auto;
  padding: 12px;
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 500;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 120px;
  }
`;


export const ServicesSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.white100};
  margin: 0 auto -120px;
  @media (max-width: 720px) {
  }
  & h1, h3{
    margin: 0 auto;
    text-align: center;
  }
`;

export const ServicesSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1900px;
  margin: 0 auto;
  padding: 40px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`
export const ServicesSectionContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 40px;
  width: 100%;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`

export const ServicesSurgeriesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
padding: 16px;
@media(max-width: 1080px){
  width: 100%;
  margin: 0 auto;
}
@media(max-width: 720px){
  width: 100%;
  padding: 0;
}
`

export const ServicesTreatmentsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
padding: 16px;
@media(max-width: 1080px){
  width: 100%;
  margin: 0 auto;
}
@media(max-width: 720px){
  width: 100%;
  padding: 0;
}

`