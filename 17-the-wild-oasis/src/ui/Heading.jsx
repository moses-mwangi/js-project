import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   justify-content: center;
// `;
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;
      color: var(--color-grey-700);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-grey-700);
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: var(--color-grey-700);
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      color: var(--color-grey-700);
    `}
`;

export default Heading;
