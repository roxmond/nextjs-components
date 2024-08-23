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
        <div className="min-w-full h-auto flex flex-col justify-center items-center text-center -mt-[5em]">
            <h1 className='text-slate-400 mb-9'>TableFlex</h1>
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

        <div className=''>
            
        <p className="text-slate-400 mt-9">
      TableFlex is a flexible and customizable table component for Next.js, built with TypeScript. You can easily create dynamic and responsive tables tailored to your specific needs.
      </p>
      <code className="inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 mt-9" onClick={handleCopy}>
        <span className="flex gap-4">
          <span className="flex-1">
            <p><span className="text-gray-500">$</span> npm i <span className="text-yellow-500">tableflex</span></p>
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
      <pre className="z-0 mt-9 p-4 relative left-0 top-2 flex max-w-fit text-left items-center rounded-xl border justify-center border-b border-gray-300 bg-gradient-to-b backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
      <code className='sm:text-[16px] text-[9px]'>
        
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

      <p className="text-slate-400 mt-9 text-left p-3">
        Add the component into your code adding three required props.<br/><br/>
        x <span className="text-[#4ec990]">&#47;&#47; to set the table columns</span><br/>
        y <span className="text-[#4ec990]">&#47;&#47; to set the table rows</span><br/>
        content <span className="text-[#4ec990]">&#47;&#47; to set the content of your table</span>
      </p>

      <pre className="z-0 mt-9 p-4 relative left-0 top-2 flex max-w-fit text-left items-center rounded-xl border justify-center border-b border-gray-300 bg-gradient-to-b backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
        <code className='sm:text-[16px] text-[11px]'>
        <span className="text-[#808073]">&lt;</span><span className="text-[#4ec990]">TableFlex</span> <span className='text-[#9cd0c6]'>x</span>=<span className='text-[#1b9ff1]'>&#123;</span><span className='text-[#b5ac5f]'>3</span><span className='text-[#1b9ff1]'>&#125;</span><span className='text-[#9cd0c6]'>y</span>=<span className='text-[#1b9ff1]'>&#123;</span><span className='text-[#b5ac5f]'>3</span><span className='text-[#1b9ff1]'>&#125;</span> <span className='text-[#9cd0c6]'>content</span>=<span className='text-[#1b9ff1]'>&#123;</span><span className='text-[#9cd0c6]'>tableContent</span><span className='text-[#1b9ff1]'>&#125;</span> <span className="text-[#808073]">&#47;&gt;</span>
        </code>
      </pre>
      <p className="text-slate-400 mt-9">
      Setting the Table Content
      </p>
      <pre className="z-0 mt-9 p-4 relative left-0 top-2 flex max-w-fit text-left items-center rounded-xl border justify-center border-b border-gray-300 bg-gradient-to-b backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
      <code className='sm:text-[16px] text-[9px]'>
      const tableContent = &#91;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#91;&#34;1.1&#34;, &#34;1.2&#34;, &#34;1.3&#34;&#93;,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#91;&#34;2.1&#34;, &#34;2.2&#34;, &#34;2.3&#34;,&#93;,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#91;&#34;3.1&#34;, &#34;3.2&#34;, &#34;3.3&#34;,&#93;,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#47;&#47; For more rows continue with &#34;4.1&#34;, &#34;4.2&#34; etc.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#47;&#47; For more cols contunue with &#34;1.4&#34;, &#34;2.4&#34; etc.<br/>
    &#93;;

      </code>
      </pre>

      <p className="text-slate-400 mt-9">
      Other Props
      </p>

      <p className="text-slate-400 mt-9 text-left p-3">
        width <span className="text-[#4ec990] text-sm">&#47;&#47; to set the table width <i>&#40;string -&#62; ex. width=&#34;50%&#34;&#41;</i></span><br/>
        height <span className="text-[#4ec990] text-sm">&#47;&#47;  to set the table height <i>&#40;string -&#62; ex. height=&#34;45px&#34;&#41;</i></span><br/>
        padding <span className="text-[#4ec990] text-sm">&#47;&#47; to set the cell padding <i>&#40;string -&#62; ex. padding=&#34;15px&#34;&#41;</i></span><br/>
        align <span className="text-[#4ec990] text-sm">&#47;&#47; to set the cell align <i>&#40;only left, right, center or justify -&#62; ex. align=&#34;center&#34;&#41;</i></span><br/>
        border <span className="text-[#4ec990] text-sm">&#47;&#47; to set the table and cell border width <i>&#40;string -&#62; ex. border=&#34;5px&#34;&#41;</i></span><br/>
        borderStyle <span className="text-[#4ec990] text-sm">&#47;&#47; to set the table and cell border style <i>&#40;string -&#62; ex. borderStyle=&#34;solid&#34;&#41;</i></span><br/>
        borderColor <span className="text-[#4ec990] text-sm">&#47;&#47; to set the table and cell border color <i>&#40;string -&#62; ex. borderColor=&#34;#c4c4c4&#34;&#41;</i></span><br/>
        hover <span className="text-[#4ec990] text-sm">&#47;&#47;  to enable the cell hover <i>&#40;boolean -&#62; ex. hover={true}&#41;</i></span><br/>
        hoverColor <span className="text-[#4ec990] text-sm">&#47;&#47;  to set hover color <i>&#40;string -&#62; ex. hoverColor=&#34;#c4c4c4&#34;&#41;</i></span>
      </p>
      
      <p className="text-slate-400 mt-9">
      For how you can merge cells, please follow the link <a href='https://www.npmjs.com/package/tableflex' target="_blank" className='text-cyan-500'>NPM TableFlex</a>.
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
