'use client'
import { copyToClipboard } from "@/utils/copyToClipboard";
import TableFlex from "@/components/tableFlex";
import { useState } from 'react';
import NavBar from "@/components/navBar";

export default function Components() {
  const tableContent = [
    ["1.1", "1.2", "1.3", "1.4"],
    ["2.1", "2.2", "2.3", "2.4"],
    ["3.1", "3.2", "3.3", "3.4"],
    // Add more rows as needed...
];

const [selectedOption, setSelectedOption] = useState<string | null>(null);
const handleSelectOption = (option: string) => {
  setSelectedOption(option);
};

const renderContent = () => {
  switch (selectedOption) {
    case 'tableflex':
      return <TableFlex x={4} y={3} width="50%" height="45px" padding="12px" align="center" border="5px" borderStyle="solid" borderColor="#c4c4c4" hover={true} hoverColor="#c4c4c4" content={[["1.1", "1.2", "1.3", "1.4"],["2.1", "2.2", "2.3", "2.4"],["3.1", "3.2", "3.3", "3.4"],]} mergedCells={[{ row: 0, col: 0, rowSpan: 0, colSpan: 0 },{ row: 0, col: 0, colSpan: 0 },]}/>;
    case 'Option2':
      return null;
    case 'Option3':
      return null;
    default:
      return (
        <div className="">
          <h1>Welcome</h1>
        </div>
      );
  }
};

  return (
    <>
    
    <NavBar onSelectOption={handleSelectOption} />
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      <div className="h-28 -m-9 relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        
      </div>

      <div>
      {renderContent()}
      </div>

      
    </main>
    </>
  );
}
