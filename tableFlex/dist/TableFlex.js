"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableFlex = function (props) {
    var x = props.x, y = props.y, content = props.content, width = props.width, height = props.height, padding = props.padding, align = props.align, border = props.border, borderStyle = props.borderStyle, borderColor = props.borderColor, hover = props.hover, hoverColor = props.hoverColor, mergedCells = props.mergedCells;
    // Function to check if a cell should be merged and return its rowSpan and colSpan
    var getMergedCellProps = function (rowIndex, colIndex) {
        var mergedCell = mergedCells === null || mergedCells === void 0 ? void 0 : mergedCells.find(function (cell) { return cell.row === rowIndex && cell.col === colIndex; });
        return {
            rowSpan: (mergedCell === null || mergedCell === void 0 ? void 0 : mergedCell.rowSpan) || 1,
            colSpan: (mergedCell === null || mergedCell === void 0 ? void 0 : mergedCell.colSpan) || 1,
        };
    };
    return (react_1.default.createElement("table", { style: { width: width, border: border, borderStyle: borderStyle, borderColor: borderColor } },
        react_1.default.createElement("tbody", null, Array.from({ length: y }, function (_, rowIndex) { return (react_1.default.createElement("tr", { key: rowIndex, style: { height: height }, className: "w-fit bg-white border-2 text-black" }, Array.from({ length: x }, function (_, colIndex) {
            var _a;
            var _b = getMergedCellProps(rowIndex, colIndex), rowSpan = _b.rowSpan, colSpan = _b.colSpan;
            // Skip rendering the cell if it's merged into another cell
            if (rowSpan > 1 || colSpan > 1) {
                for (var r = rowIndex + 1; r < rowIndex + rowSpan; r++) {
                    if (r < y)
                        Array.from({ length: x }, function (_, cIndex) { return cIndex === colIndex && Array(cIndex).fill(''); });
                }
                for (var c = colIndex + 1; c < colIndex + colSpan; c++) {
                    if (c < x)
                        Array.from({ length: x }, function (_, cIndex) { return cIndex === colIndex && Array(cIndex).fill(''); });
                }
            }
            return (react_1.default.createElement("td", { key: colIndex, rowSpan: rowSpan, colSpan: colSpan, style: {
                    padding: padding,
                    textAlign: align,
                    border: border,
                    borderStyle: borderStyle,
                    borderColor: borderColor,
                    transition: 'background-color 0.3s ease',
                    backgroundColor: hover ? 'inherit' : undefined,
                }, className: "w-fit bg-white border-2 text-black", onMouseEnter: function (e) { return hover && (e.currentTarget.style.backgroundColor = hoverColor || ''); }, onMouseLeave: function (e) { return hover && (e.currentTarget.style.backgroundColor = ''); } }, ((_a = content[rowIndex]) === null || _a === void 0 ? void 0 : _a[colIndex]) || ''));
        }))); }))));
};
exports.default = TableFlex;
//# sourceMappingURL=TableFlex.js.map