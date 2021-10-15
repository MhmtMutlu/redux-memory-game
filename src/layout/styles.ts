import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid; 
  grid-template-columns: 100vw; 
  grid-template-rows: 25vh 75vh; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Header"
    "PlayGround"; 
`;
