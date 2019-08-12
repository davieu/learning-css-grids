learning about CSS GRID
// hoow many you want in the column/how wide column is
grid-template-columns:
// how tall the row is
grid-template-rows:

smarter way to do it. 5 columns, 50px wide
grid-template-columns: repeat(5, 50px);

// more dynamic with fr (fraction of the space)
grid-template-columns: 1fr 1fr  3fr;

grid-template-columns: repeat(3, 1fr);


// the gaps in between columns and rows
grid-column-gap: 20px;
grid-row-gap: 20px
// short hand for both column and row gap
grid-gap:
// auto lengthens the row
grid-auto-rows: 150px;
