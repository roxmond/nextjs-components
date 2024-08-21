import NavBar1 from "@/components/navBar1";
import TableFlex from "@/components/tableFlex";

export default function Components() {
  const tableContent = [
    ["1.1", "1.2", "1.3", "1.4"],
    ["2.1", "2.2", "2.3", "2.4"],
    ["3.1", "3.2", "3.3", "3.4"],
    // Add more rows as needed...
];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="c text-slate-400 mb-9">TableFlex</p>
      <TableFlex
        x={4}
        y={3}
        width="50%"
        height="45px"
        padding="12px"
        align="center"
        border="5px"
        borderStyle="solid"
        borderColor="#c4c4c4"
        hover={true}
        hoverColor="#c4c4c4"
        content={tableContent}
        mergedCells={[
          { row: 0, col: 0, rowSpan: 0, colSpan: 0 },
          { row: 0, col: 0, colSpan: 0 },
      ]}
      />

      <p className="text-slate-400 mt-9">
        Test
      </p>
    </main>
  );
}
