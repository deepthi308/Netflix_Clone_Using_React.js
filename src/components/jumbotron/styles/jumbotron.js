import { styled } from "styled-components";

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0px 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600) {
    flex-direction: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;

  @media (max-width: 600) {
    flex-direction: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
