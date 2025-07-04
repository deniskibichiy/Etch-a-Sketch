# Etch-a-Sketch
A pretty neat toy to flex my DOM Manipulation skills.

# Program development life cyle
1. Understand the problem
* The problem: 
    1. Creating a web page with 16 * 16 grid of square divs
    2. The divs are to be created using JavaScript
    3. Make use of flexbox to layout the divs as a grid.
    4. Set up an hover effect so that the grid divs change color when the mouse passes over them, leaving a trail through the grid
    5. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before so that a new sketch pad is created.
2. Design the project
* This project requires a number of functionalities for it to be successful:
    1. A function to creat the divs. The divs will be created using JavaScript meaning that I have to attach. The number of divs are obtained by providing the user with a button, which when on clicking, will prompt them to enter the number of square divs per side. This means that the button clicked by the user will be supplied by an event listener which will run the function on clicking.
    2. The next pain is deciding the sequence of adding the squares to the container. Should I add the rows first and divide them into columns, or should I add the columns, each divided into a row. 
    3. The third pain point is that we have a fixed container size, how do I distribute the number of divs evenly? which flexbox property or which css property allows me to perform the operation such that as the number of divs increase, the dimensions of the container remain the same but the divs are divided into equal squares? Once this problem is solved, I should consider this project a success.

    ## Flexbox explanation
    * For the flexbox section of setting up the square divs, the seventeenth div is set to a width of 100% and then its content is also set to empty for the purpose of pushing the next row into a new line, without which the set of divs in the next line would not be balanced since the browser would not know when to start wrapping content into new line. 

    ## Using a JS Variable with units as a value in CSS styling

    * The other bit of pain in this project involved making using of JS math logic to create a value and pass it into a CSS declaration as a value. Why this was painful is that I needed a fixed container which had to accomodate all the divs while maintaining the dimensions. For this, I created two different values: one holding the numeric value and the other holding the value "px" which is a string. While passing the values into CSS, I used string concatenation which provides a way of combining the two into a single value block, e.g when the width value was 900/45 and the unit is px, concatinating led to the width and height of the square div being set to 900/45 px. This allowed me to allocate the width and height size to the square divs based on the user input which would evidently keep on changing. KUDOS!