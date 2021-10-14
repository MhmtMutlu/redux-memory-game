import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 1280px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 1080px;
  }

  @media (max-width: 1080px) {
    width: 860px;
  }

  @media (max-width: 860px) {
    width: 640px;
  }

  @media (max-width: 640px) {
    width: 428px;
  }
`;
