https://www.youtube.com/watch?v=M3qBpPw77qo

learning about CSS GRID
to look at just open up the folder and put in copy paste the html path into the browser

//mobile-first-grid-site  ----- A simple site that uses mobile first practices and css grid. Mobile layout completed first.

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

span for two lines
.item-5 {
  grid-column: span 2;
}

produces same result as the above with the right config
.item-5 {
  /* grid-column: span 2; */
  grid-column-start: 2;
  grid-column-end: 4;
}