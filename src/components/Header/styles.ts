import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    /* 1rem = 16px */
    font-size: 1rem;
    color:#fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem; //16px * 3
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9)
    }
  }
`