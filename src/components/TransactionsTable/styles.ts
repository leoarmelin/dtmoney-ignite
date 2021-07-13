import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Table = styled.table`
  width: 100%;

  border-spacing: 0 0.5rem;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 1rem 2rem;

  font-weight: 400;
  line-height: 1.5rem;
  text-align: left;

  color: var(--text-body);
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  border: 0;
  border-radius: 0.25rem;
  padding: 1rem 2rem;

  background-color: var(--shape);
  color: var(--text-body);

  &:first-child {
    color: var(--text-title);
  }

  &.deposit {
    color: var(--green);
  }

  &.withdraw {
    color: var(--red);
  }
`;
