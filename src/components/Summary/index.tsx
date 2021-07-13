import { Container, ItemContainer, ItemHeader, ItemValue } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <ItemContainer>
        <ItemHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </ItemHeader>
        <ItemValue>R$1000,00</ItemValue>
      </ItemContainer>

      <ItemContainer>
        <ItemHeader>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saída" />
        </ItemHeader>
        <ItemValue>- R$500,00</ItemValue>
      </ItemContainer>

      <ItemContainer>
        <ItemHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </ItemHeader>
        <ItemValue>R$500,00</ItemValue>
      </ItemContainer>
    </Container>
  );
}
