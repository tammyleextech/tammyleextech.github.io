import styled from "styled-components";

export const FadeInDiv = styled.div`
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
  ${({ isVisible }) => `
        opacity: ${isVisible ? 1 : 0};
        transform: ${isVisible ? "none" : "translateY(20vh)"};
        visibility: ${isVisible ? "visible" : "hidden"};
    `}
`;
