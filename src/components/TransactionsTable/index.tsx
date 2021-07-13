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
          <TableRow>
            <TableData>Desenvolvimento de website</TableData>
            <TableData className="deposit">R$12.000</TableData>
            <TableData>Desenvolvimento</TableData>
            <TableData>12/02/2021</TableData>
          </TableRow>
          <TableRow>
            <TableData>Desenvolvimento de website</TableData>
            <TableData className="withdraw">R$12.000</TableData>
            <TableData>Desenvolvimento</TableData>
            <TableData>12/02/2021</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}
