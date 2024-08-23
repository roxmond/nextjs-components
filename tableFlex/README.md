# TableFlex

TableFlex is a flexible and customizable table component for Next.js, built with TypeScript. You can easily create dynamic and responsive tables tailored to your specific needs.

## Installing

```npm i tableflex```

## Documentation

Add the <TableFlex /> component into your code adding three required props.

- x <span style="color: #6a7a2c;">// to set the table columns</span>
- y <span style="color: #6a7a2c;">// to set the table rows</span>
- content <span style="color: #6a7a2c;">// to set the content of your table</span>

```<TableFlex x={3} y={3} content={tableContent} />```

### Table Content

You have to declare the tableContent as follows:

``const tableContent = [``<br>
&nbsp;&nbsp;&nbsp;&nbsp;``["1.1", "1.2", "1.3"],``<br>
&nbsp;&nbsp;&nbsp;&nbsp;``["2.1", "2.2", "2.3",],``<br>
&nbsp;&nbsp;&nbsp;&nbsp;``["3.1", "3.2", "3.3",],``<br>
&nbsp;&nbsp;&nbsp;&nbsp;``// For more rows continue with "4.1", "4.2" etc.``<br>
&nbsp;&nbsp;&nbsp;&nbsp;``// For more cols contunue with "1.4", "2.4" etc.``<br>
``];``

## Other Props

- width <span style="color: #6a7a2c;">// to set the table width</span> <span style="color: #a4a4a4;">*(string -> ex. width="50%")*</span>
- height <span style="color: #6a7a2c;">// to set the table height</span> <span style="color: #a4a4a4;">*(string -> ex. height="45px")*</span>
- padding <span style="color: #6a7a2c;">// to set the cell padding</span> <span style="color: #a4a4a4;">*(string -> ex. padding="15px")*</span>
- align <span style="color: #6a7a2c;">// to set the cell align</span> <span style="color: #a4a4a4;">*(only left, right, center or justify -> ex. align="center")*</span>
- border <span style="color: #6a7a2c;">// to set the table and cell border width</span> <span style="color: #a4a4a4;">*(string -> ex. border="5px")*</span>
- borderStyle <span style="color: #6a7a2c;">// to set the table and cell border style </span> <span style="color: #a4a4a4;">*(string -> ex. borderStyle="solid")*</span>
- borderColor <span style="color: #6a7a2c;">// to set the table and cell border color</span> <span style="color: #a4a4a4;">*(string -> ex. borderColor="#c4c4c4")*</span>
- hover <span style="color: #6a7a2c;">// to enable the cell hover</span> <span style="color: #a4a4a4;">*(boolean -> ex. hover={true})*</span>
- hoverColor <span style="color: #6a7a2c;">// to set hover color</span> <span style="color: #a4a4a4;">*(string -> ex. hoverColor="#c4c4c4")*</span>

### Example Usage

```<TableFlex```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```x={3}```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```y={3}```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```content={tableContent}```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```width="50%"```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```height="45px"```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```padding="12px"```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```align="center"```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```border="5px"```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```borderStyle="solid"```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```borderColor="#c4c4c4"```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```hover={true}```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```hoverColor="#c4c4c4"```<br>
 ```/>```

 ## Merging Cells

 In order to merge cells follow the instructions:

 ```<TableFlex```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```x={3}```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```y={3}```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```content={tableContent}```<br>
&nbsp;&nbsp;&nbsp;&nbsp;```mergedCells={[```<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```{ row: 0, col: 0, rowSpan: 0, colSpan: 0 },```<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```// if you want to merge more than one cell and a line```<br>
```]}```<br>
 ```/>```

 *Note that the ```row```, ```col```, ```rowSpan```, and ```colSpan``` follows the indexing so col=0, row=0 is the cell 1x1.*

 ### Version Notes (1.0.3 - 1.1.3)

 - Node Modules path for TableFlex fixed.
 ### More

 For more you can visit my [GitHub](https://github.com/roxmond/) and my [Next.js Components](https://nextjs-components-blush.vercel.app/)