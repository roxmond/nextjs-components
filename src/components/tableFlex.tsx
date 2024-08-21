'use client';

import { copyToClipboard } from '@/utils/copyToClipboard';
import { useState } from 'react';



interface MergedCell {
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
}

interface TableFlexProps {
    x: number; // cols
    y: number; // rows
    content: string[][]; // content
    width?: string;
    height?: string;
    padding?: string;
    align?: 'left' | 'right' | 'center' | 'justify';
    border?: string;
    borderStyle?: string;
    borderColor?: string;
    hover?: boolean;
    hoverColor?: string;
    mergedCells?: MergedCell[]; // New prop for merged cells
}

const TableFlex: React.FC<TableFlexProps> = (props) => {
    const {
        x,
        y,
        content,
        width,
        height,
        padding,
        align,
        border,
        borderStyle,
        borderColor,
        hover,
        hoverColor,
        mergedCells,
    } = props;

    // Function to check if a cell should be merged and return its rowSpan and colSpan
    const getMergedCellProps = (rowIndex: number, colIndex: number) => {
        const mergedCell = mergedCells?.find(cell => cell.row === rowIndex && cell.col === colIndex);
        return {
            rowSpan: mergedCell?.rowSpan || 1,
            colSpan: mergedCell?.colSpan || 1,
        };
    };

    const [showNotification, setShowNotification] = useState(false);
const [showComponent, setComponent] = useState();

const handleCopy = () => {
  copyToClipboard('npm i tableflex');
  setShowNotification(true);
  setTimeout(() => setShowNotification(false), 2000); // Hide notification after 2 seconds
};

    return (
        <div className="min-w-full h-auto flex flex-col justify-center items-center text-center">
        <table style={{ width, border, borderStyle, borderColor }}>
            <tbody>
                {Array.from({ length: y }, (_, rowIndex) => (
                    <tr key={rowIndex} style={{ height }} className="w-fit bg-white border-2 text-black">
                        {Array.from({ length: x }, (_, colIndex) => {
                            const { rowSpan, colSpan } = getMergedCellProps(rowIndex, colIndex);

                            // Skip rendering the cell if it's merged into another cell
                            if (rowSpan > 1 || colSpan > 1) {
                                for (let r = rowIndex + 1; r < rowIndex + rowSpan; r++) {
                                    if (r < y) Array.from({ length: x }, (_, cIndex) => cIndex === colIndex && Array(cIndex).fill(''));
                                }
                                for (let c = colIndex + 1; c < colIndex + colSpan; c++) {
                                    if (c < x) Array.from({ length: x }, (_, cIndex) => cIndex === colIndex && Array(cIndex).fill(''));
                                }
                            }

                            return (
                                <td
                                    key={colIndex}
                                    rowSpan={rowSpan}
                                    colSpan={colSpan}
                                    style={{
                                        padding,
                                        textAlign: align,
                                        border,
                                        borderStyle,
                                        borderColor,
                                        transition: 'background-color 0.3s ease',
                                        backgroundColor: hover ? 'inherit' : undefined,
                                    }}
                                    className="w-fit bg-white border-2 text-black"
                                    onMouseEnter={(e) => hover && (e.currentTarget.style.backgroundColor = hoverColor || '')}
                                    onMouseLeave={(e) => hover && (e.currentTarget.style.backgroundColor = '')}
                                >
                                    {content[rowIndex]?.[colIndex] || ''}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>

        <div>
        <p className="text-slate-400 mt-9">
      TableFlex is a flexible and customizable table component for Next.js, built with TypeScript. You can easily create dynamic and responsive tables tailored to your specific needs.
      </p>
      <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 mt-9" onClick={handleCopy}>
        <span className="flex gap-4">
          <span className="flex-1">
            <p>npm i <span className="text-yellow-500">tableflex</span></p>
          </span>
        </span>

          <svg className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
            <path
              d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
            </path>
          </svg>
      </code>

      <div className='flex flex-col justify-center items-center'>      
      <p className="text-slate-400 mt-9">
      On the tsconfig.json add the following path:
      </p>
      <pre className="z-0 mt-9 p-4 relative left-0 top-2 flex w-fit text-left items-center rounded-xl border justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
      <code>
        
      <span>&#123;</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span>&#34;</span>compilerOptions<span>&#34;</span>:<span>&#123;</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#47;&#47; ... existing options ...<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;paths&#34;: <span>&#123;</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#34;tableflex&#34;: <span>&#91;</span>&#34;./node_modules/tableflex/src/index.ts&#34;<span>&#93;</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&#125;</span><br/>
      &nbsp;&nbsp;&nbsp;<span>&#125;</span><br/>
      <span>&#125;</span>
      
      </code>
      </pre>

      <p className="text-slate-400 mt-9">
      Add the component into your code adding three required props.<br/>

x // to set the table columns<br/>
y // to set the table rows<br/>
content // to set the content of your table
      </p>
      
      
      </div>
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Text copied to clipboard!
        </div>

        
      )}
        </div>

        </div>

        


    );
};

export default TableFlex;
