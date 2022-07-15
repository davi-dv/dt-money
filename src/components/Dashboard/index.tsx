import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable/Transaction";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransactionTable/>
    </Container>
  )
}