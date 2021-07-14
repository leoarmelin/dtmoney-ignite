import Modal from "react-modal";

import {
  Container,
  ModalTitle,
  Input,
  Button,
  TransactionTypeContainer,
  TransactionTypeButton,
  TransactionTypeImg,
  TransactionTypeText,
  CloseBtn,
  CloseImg,
} from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <CloseBtn onClick={onRequestClose}>
        <CloseImg src={closeImg} />
      </CloseBtn>
      <Container onSubmit={handleCreateNewTransaction}>
        <ModalTitle>Cadastrar transação</ModalTitle>

        <Input
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <Input
          type="number"
          placeholder="Valor"
          onChange={(event) => setAmount(Number(event.target.value))}
          value={amount}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <TransactionTypeImg src={incomeImg} />

            <TransactionTypeText>Entrada</TransactionTypeText>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <TransactionTypeImg src={outcomeImg} />

            <TransactionTypeText>Saída</TransactionTypeText>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <Input
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />

        <Button type="submit">Cadastrar</Button>
      </Container>
    </Modal>
  );
}
