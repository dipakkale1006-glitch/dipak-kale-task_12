# Task 12: JavaScript - Compound Interest Calculation

## About the Project
This project is created as part of the MERN Stack Course. The objective of this assignment is to write a JavaScript program that calculates compound interest using variables, operators, and the compound interest mathematical formula. It includes both a predefined static variable calculation logged to the console and an interactive, responsive web calculator for user input.


## Formula for Compound Interest

The formula used to calculate compound interest is:

$$A = P \times \left(1 + \frac{r}{n}\right)^{nt}$$
$$CI = A - P$$

### Where:
- **A** = Total Accrued Amount
- **P** = Principal Investment Amount
- **r** = Annual Interest Rate (as a decimal: $\frac{R}{100}$)
- **n** = Compounding Frequency (number of times interest is compounded per year)
- **t** = Time period (in years)
- **CI** = Compound Interest ($A - P$)

## Features

- **Predefined Static Calculation**: Implements the compound interest formula using predefined variables as instructed in the assignment.
- **Console Output**: Automatically displays the calculated interest to the user via `console.log()`.
- **Interactive UI Calculator**:
  - Allows users to enter **any value** (whole numbers, decimals, or custom rates).
  - Calculates and updates the output upon clicking the **Calculate Interest** button.
  - Supports multiple compounding frequencies: Yearly ($n=1$), Half-Yearly ($n=2$), Quarterly ($n=4$), Monthly ($n=12$), and Daily ($n=365$).
  - Clean **Reset** button that restores defaults and sets output display back to `₹ 0.00`.
- **Currency Formatting**: Formats values in Indian Rupee notation with commas and two decimal places (e.g., `₹ 1,34,818.18`).
- **Responsive Layout**: Designed with custom CSS for desktop, tablet, and mobile screens.


## Console Output Sample

When the page loads, the predefined variables execute and log the following to the browser console:

The compound interest after 3 years is: 34818.18


## Technologies Used

- **HTML5**: Page structure and semantic form controls
- **CSS3**: Layout styling, card design, and responsive media queries
- **JavaScript (ES6)**: Variables (`let`), arithmetic operators, mathematical functions (`Math.pow()`), DOM manipulation, and event handling

## Project Files

- `index.html` – Webpage layout and input form structure
- `style.css` – Calculator styling and responsive design
- `script.js` – Static formula calculation, console logging, and interactive form handling
- `README.md` – Project documentation and guidelines

## How to Run the Project

1. Keep `index.html`, `style.css`, `script.js`, and `README.md` in the same folder.
2. Double-click or open `index.html` in any web browser (Google Chrome, Edge, Firefox, etc.).
3. Press **F12** or right-click and select **Inspect -> Console** to view the `console.log()` output.
4. Enter any values in the form and click **Calculate Interest** to see the calculation on the screen.


## Learning Outcomes

- Learned how to declare and use JavaScript variables (`let`).
- Practiced using arithmetic operators (`*`, `/`, `+`, `-`) and `Math.pow()` for exponentiation.
- Understood the compound interest mathematical formula.
- Learned DOM event handling using `addEventListener("submit", ...)` and `addEventListener("reset", ...)`.
- Ensured proper linking of external CSS and JavaScript files to an HTML document.


## Author
**Dipak Kale**
*MERN Stack Course*
