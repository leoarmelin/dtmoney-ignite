import { Container, ItemContainer, ItemHeader, ItemValue } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <ItemContainer>
        <ItemHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </ItemHeader>
        <ItemValue>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </ItemValue>
      </ItemContainer>

      <ItemContainer>
        <ItemHeader>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saída" />
        </ItemHeader>
        <ItemValue>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </ItemValue>
      </ItemContainer>

      <ItemContainer>
        <ItemHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </ItemHeader>
        <ItemValue>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </ItemValue>
      </ItemContainer>
    </Container>
  );
}
