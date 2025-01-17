import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useLoadTodos from "../hooks/useLoadTodos";

export default function Todos() {
  const { data, isLoading } = useLoadTodos();

  if (isLoading) {
    return "Loading...";
  }

  return (
    <TableContainer data-testid="app" component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Todo</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell data-testid="status">
                {row.completed ? "completed" : "pending"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
