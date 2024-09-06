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
import TopContent from "../components/TopContent";
import { useSelector } from "react-redux";

const PreviousData = () => {
  const userVitals = useSelector((state) => state.userVitals.vitalsInfo);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  // Format the data
  const formattedData = userVitals.map((item) => {
    const date = new Date(item.datetime);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const datePart = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    const time = date.toLocaleTimeString("en-US", { hour12: false });

    return {
      ...item,
      datetime: `${datePart}, ${day} ${time}`, // Format to "5 September, Monday 00:00:00"
      temperature: item.temperature.toFixed(1), // Format temperature to 1 decimal place
    };
  });

  const pages = Math.ceil(formattedData.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return formattedData.slice(start, end);
  }, [page, formattedData]);

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
          <TableColumn key="datetime">DAY, TIME</TableColumn>
          <TableColumn key="heart_rate">HEART BEAT RATE (BPM)</TableColumn>
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
