import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
} from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
