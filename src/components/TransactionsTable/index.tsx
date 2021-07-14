import { useTransactions } from "../../hooks/useTransactions";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
} from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Título</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Categoria</TableHeader>
            <TableHeader>Data</TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableData>{transaction.title}</TableData>
              <TableData className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </TableData>
              <TableData>{transaction.category}</TableData>
              <TableData>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
