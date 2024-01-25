import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  useTheme,
  TablePagination,
} from "@mui/material";

import { ASSETS_STAKED } from "../constants/config";

type Props = {};

interface Column {
  id: "percentInterest" | "staked" | "interest";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const StakingTable = ({}: Props) => {
  const { palette } = useTheme();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const columns: readonly Column[] = [
    { id: "percentInterest", label: "Percent Interest", minWidth: 100 },
    {
      id: "staked",
      label: "Staked",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "interest",
      label: "Interest",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
  ];

  const renderTableCell = (content: React.ReactNode) => (
    <TableCell
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "0.5rem",
        color: palette.secondary.light,
        width: "25%",
        height: "50%",
        fontSize: "14px",
        border: "none",
      }}
    >
      {content}
    </TableCell>
  );

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table stickyHeader aria-lable="sticky table">
          <TableHead>
            <TableRow
              sx={{
                display: "flex",
                justifyItems: "center",
              }}
            >
              <TableCell
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: palette.primary.light,
                  backgroundColor: palette.grey[900],
                  width: "25%",
                  borderRadius: "15px 0 0 15px",
                  fontSize: "18px",
                  border: "none",
                  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)",
                }}
              >
                Assets
              </TableCell>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: palette.primary.light,
                    backgroundColor: palette.grey[900],
                    width: "25%",
                    fontSize: "18px",
                    border: "none",
                    boxShadow:
                      "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}

              <TableCell
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: palette.primary.light,
                  backgroundColor: palette.grey[900],
                  width: "25%",
                  borderRadius: "0 15px 15px 0",
                  fontSize: "18px",
                  border: "none",
                  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)",
                }}
              >
                Days Remaining
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ASSETS_STAKED.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map(asset => (
              <TableRow
                sx={{
                  display: "flex",
                }}
              >
                {renderTableCell(asset.name)}
                {renderTableCell(`${asset.percentInterest}%`)}
                {renderTableCell(`${asset.etherStaked} ETH`)}
                {renderTableCell(`${asset.etherInterest} ETH`)}
                {renderTableCell(`${asset.daysRemaining} days`)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StakingTable;
