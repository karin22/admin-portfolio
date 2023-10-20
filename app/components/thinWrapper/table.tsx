"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.white,
    fontSize: 14,
    cursor: "pointer",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.common.black,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    "&:hover": {
      backgroundColor: theme.palette.common.black,
    },
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Props {
  header: { name: string; key: string }[];
  items: any[];
  onClickRow: (e: React.MouseEvent<unknown>, r: any) => void;
}
export default function ThinWrapperTable(props: Props) {
  return (
    <>
      <div style={{ display: "grid" }}>
        <TableContainer component={Paper} sx={{ display: "grid" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {props.header.map((head) => (
                  <StyledTableCell key={head.name}>{head.name}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.items.map((row) => (
                <StyledTableRow
                  key={row.name}
                  onClick={(event) => props.onClickRow(event, row)}
                >
                  {props.header.map((head) => (
                    <StyledTableCell component="th" scope="row" key={head.name}>
                      {row[head.key]}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
