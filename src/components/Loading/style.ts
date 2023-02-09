import styled from "styled-components";

export const Loading = styled.img`
  animation: loading 1.5s infinite;
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;