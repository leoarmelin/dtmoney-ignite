import styled from "styled-components";
import { darken, transparentize } from "polished";

interface TransactionTypeButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const Container = styled.form``;

export const ModalTitle = styled.h2`
  margin-bottom: 2rem;

  font-size: 1.5rem;

  color: var(--text-title);
`;

export const Input = styled.input`
  height: 4rem;
  width: 100%;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  padding: 0 1.5rem;

  font-size: 1rem;
  font-weight: 400;

  background-color: #e7e9ee;

  &::placeholder {
    color: var(--body);
  }

  & + input {
    margin-top: 1rem;
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 0.5rem;
  margin: 1rem 0;
`;

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;

export const TransactionTypeImg = styled.img`
  height: 20px;
  width: 20px;
`;

export const TransactionTypeText = styled.span`
  display: inline-block;

  margin-left: 1rem;

  font-size: 1rem;

  color: var(--text-title);
`;

export const Button = styled.button`
  height: 4rem;
  width: 100%;

  border: 0;
  border-radius: 0.25rem;
  margin-top: 1.5rem;
  padding: 0 1.5rem;

  font-size: 1rem;
  font-weight: 600;

  background-color: var(--green);
  color: #fff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  border: 0;
  padding: 0.5rem;

  background-color: transparent;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CloseImg = styled.img``;
