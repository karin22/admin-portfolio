"use client";

import Stack from "@mui/material/Stack";
import ThinWrapperTable from "@/app/components/thinWrapper/table";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";

const state = {
  header: [
    {
      name: "date",
      key: "date",
    },
    {
      name: "description",
      key: "description",
    },
  ],
  items: [
    createData(
      "I 'm a front-end developer at radius company.I'm developing the website using NuxtJS and Vue ",
      "may 2021 - present"
    ),
    createData(
      "Internship as a Front-end Developer at Dek-D Interactive     Co., Ltd. Participate in developing the website Dek-D using NuxtJS connect the api with GraphQL.",
      "Jan 2021 - Apr 2021"
    ),
    createData(
      "Make a framework for analyzing sentimental data from online reviews, case studies of Phuket beaches, and create a web page with VueJs, Google chart, and connecting the API with Axios.",
      "Mar 2020 - Dec 2020"
    ),
  ],
};
function createData(description: string, date: string) {
  return { description, date };
}

const onClickRow = (_: React.MouseEvent<unknown>, row: any) => {
  console.log(row);
};
const handleStop = () => {
  console.log("asd");
};
export default function ExperiencePage() {
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
