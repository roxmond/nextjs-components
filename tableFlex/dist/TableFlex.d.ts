import React from 'react';
interface MergedCell {
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
}
interface TableFlexProps {
    x: number;
    y: number;
    content: string[][];
    width?: string;
    height?: string;
    padding?: string;
    align?: 'left' | 'right' | 'center' | 'justify';
    border?: string;
    borderStyle?: string;
    borderColor?: string;
    hover?: boolean;
    hoverColor?: string;
    mergedCells?: MergedCell[];
}
declare const TableFlex: React.FC<TableFlexProps>;
export default TableFlex;
//# sourceMappingURL=TableFlex.d.ts.map