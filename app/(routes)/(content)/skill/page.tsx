"use client";

import Stack from "@mui/material/Stack";
import ThinWrapperTable from "@/app/components/thinWrapper/table";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";

const state = {
  header: [
    {
      name: "name",
      key: "name",
    },
    {
      name: "year",
      key: "year",
    },
    {
      name: "GPA",
      key: "gpa",
    },
  ],
  items: [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Eclair", 262, 16.0),
    createData("Cupcake", 305, 3.7),
    createData("Gingerbread", 356, 16.0),
  ],
};
function createData(name: string, year: number, gpa: number) {
  return { name, year, gpa };
}

const onClickRow = (_: React.MouseEvent<unknown>, row: any) => {
  console.log(row);
};
export default function SkillPage() {
  return (
    <>
      <Stack direction="column">
        <Stack direction="row" justifyContent="right">
          <Button
            variant="contained"
            style={{ marginBottom: "16px" }}
            startIcon={<AddCircleOutlineIcon />}
          >
            Add
          </Button>
        </Stack>

        <ThinWrapperTable
          header={state.header}
          items={state.items}
          onClickRow={(event, r) => onClickRow(event, r)}
        />
      </Stack>
    </>
  );
}
