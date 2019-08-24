https://www.youtube.com/watch?v=M3qBpPw77qo

This is my frontend git repo. It is me just practicing with design and figuring out cool implementations of anything that I want to lean.

learning about CSS GRID
to look at just open up the folder and put in copy paste the html path into the browser

//mobile-first-grid-site  ----- A simple site that uses mobile first practices and css grid. Mobile layout completed first.

// how many you want in the column/how wide column is
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


//////////////////////// FLEX ////////////
  -----flex-direction:
  //default direction will be row/horizontally
  flex-direction: column, row, row-reverse, column-reverse
  
  -----justify-content:
  justify-content: start, center, flex-end, space-evenly, space-around, space-between;

  -----align-items:
  // to use stretch there muse not be a defined height or width. stretch to size of parent
  // baseline will align text with other text
  align-items:flex-start, center, flex-end, stretch, baseline;


  //flex-wrap: wrap needs to be 'wrap' for the align content to wrap and work correctly
  flex-wrap: wrap;
  // align-content: flex-start, center, flex-end, space-around, space-between, space-evenly;
  
  // just a faster way to use flex-direction and wrap
  flex-flow: column wrap;

  // order is used to rearrange the order of elements. 
  order: 0 is default for every element. This means that if you change the first elements order to 1 then it has the highest order number of all the elements. Will be moved to the end.
  order: -1 will be lower than all the elements since all will be zero. Thus making -1 the first.

  // fills the empty space can split among other elements
  flex-grow: 1;

  // opposite of flex-grow. Will shrink when at a certain size
  flex-shrink: 1;

  // It's preffered to use flex instead of flex-grow and flex-shrink. this will do it automatically.
  flex: 1 0 auto;
  //the third is the basis which is preferred to width. If you are using width than you can just remove it since the 300px is now the width.
  // with flex-wrap: wrap - included it will make the page really dynamic. So when it hits below 300px the element will make another row and fill it.
  flex: 1 1 300px;
    
  // preferred use of setting width in flex. I need to look into it more.
  flex-basis: 200px

  // align-self is to move individual elements. 
  align-self: center, felx-end, flex-start;
