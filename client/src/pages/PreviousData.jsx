import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { fitnessData } from "../assets/data";
import TopContent from "../components/TopContent";

const PreviousData = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(fitnessData.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return fitnessData.slice(start, end);
  }, [page, fitnessData]);

  return (
    <div className="max-w-[1000px] w-full mx-auto my-5 flex flex-col gap-5">
      <TopContent />
      <p className="text-2xl font-bold">Previous Data</p>
      <Table
        aria-label="Fitness data table with client side pagination"
        isStriped
        isVirtualized
        color="primary"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[500px]",
        }}
      >
        <TableHeader>
          <TableColumn key="dateTime">DAY, TIME</TableColumn>
          <TableColumn key="heartBeat">HEART BEAT RATE (BPM)</TableColumn>
          <TableColumn key="spo2">SPO2 (%)</TableColumn>
          <TableColumn key="temperature">TEMPERATURE (°C)</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PreviousData;
