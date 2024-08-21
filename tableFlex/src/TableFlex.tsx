'use client';
import React from 'react';


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

    return (
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
    );
};

export default TableFlex;
