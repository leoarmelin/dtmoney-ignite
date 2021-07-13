import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 2rem;
  margin-top: -10rem;

  div:last-child {
    background: var(--green);
    color: #fff;
  }
`;

export const ItemContainer = styled.div`
  border-radius: 0.25rem;
  padding: 1.5rem 2rem;

  background: var(--shape);
  color: var(--text-title);
`;

export const ItemHeader = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const ItemValue = styled.strong`
  display: block;

  margin-top: 1rem;

  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
