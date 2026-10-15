// ========================================================
// Task: Calculate Compound Interest using Predefined Variables
// Formula: A = P * (1 + (r / n)) ^ (n * t)
// Where:
//   P = Principal amount
//   r = Rate of interest (annual)
//   n = Number of times interest compounded per year
//   t = Time in years
//   A = Total accrued amount
//   CI = Compound Interest (A - P)
// ========================================================

// Predefined static variables (as required by the assignment)
let principal = 100000;     // Principal amount (₹)
let rate = 10;              // Annual interest rate (%)
let time = 3;               // Time in years
let frequency = 12;         // Compounded monthly (12 times a year)

// Applying the compound interest formula
let rateDecimal = (rate / 100) / frequency;
let amount = principal * Math.pow(1 + rateDecimal, frequency * time);
let compoundInterest = amount - principal;

// Display the calculated compound interest in the console
console.log("The compound interest after " + time + " years is: " + compoundInterest.toFixed(2));


// ========================================================
// Interactive Webpage Calculator
// Calculates ONLY when clicking the "Calculate Interest" button
// Works for any entered value
// ========================================================
if (typeof document !== "undefined") {
    const form = document.getElementById("interestForm");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const timeInput = document.getElementById("time");
    const frequencyInput = document.getElementById("frequency");

    const resultEl = document.getElementById("result");
    const amountEl = document.getElementById("amount");
    const principalResultEl = document.getElementById("principalResult");
    const interestEl = document.getElementById("interest");

    // Format numbers with Indian currency notation (e.g. ₹ 1,34,818.18)
    function formatCurrency(value) {
        if (!Number.isFinite(value) || isNaN(value)) {
            return "₹ 0.00";
        }
        return "₹ " + value.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    // Reset displayed output values back to ₹ 0.00
    function resetDisplay() {
        resultEl.textContent = "₹ 0.00";
        amountEl.textContent = "₹ 0.00";
        principalResultEl.textContent = "₹ 0.00";
        interestEl.textContent = "₹ 0.00";
    }

    // Calculate interest only when the user submits / clicks "Calculate Interest"
    function calculateInterest(event) {
        if (event) {
            event.preventDefault();
        }

        const pValue = principalInput.value.trim();
        const rValue = rateInput.value.trim();
        const tValue = timeInput.value.trim();
        const n = Number(frequencyInput.value);

        // Check if any field is empty
        if (pValue === "" || rValue === "" || tValue === "") {
            alert("Please fill in all input fields.");
            return;
        }

        const P = Number(pValue);
        const r = Number(rValue);
        const t = Number(tValue);

        // Validation for valid numbers
        if (
            !Number.isFinite(P) ||
            !Number.isFinite(r) ||
            !Number.isFinite(t) ||
            !Number.isFinite(n) ||
            P < 0 ||
            r < 0 ||
            t < 0 ||
            n <= 0
        ) {
            alert("Please enter valid positive values.");
            return;
        }

        // Compound Interest Formula: A = P * (1 + (r / 100) / n) ^ (n * t)
        let totalAmount = P;
        if (r > 0 && t > 0) {
            totalAmount = P * Math.pow(1 + (r / 100) / n, n * t);
        }
        const ci = totalAmount - P;

        // Display results on the webpage
        resultEl.textContent = formatCurrency(totalAmount);
        amountEl.textContent = formatCurrency(totalAmount);
        principalResultEl.textContent = formatCurrency(P);
        interestEl.textContent = formatCurrency(ci);

        // Log calculation to the console
        console.log("The compound interest after " + t + " years is: " + ci.toFixed(2));
    }

    // Listen for form submission (Calculate Interest button click or Enter key)
    form.addEventListener("submit", calculateInterest);

    // Reset button: restores inputs and resets output display to ₹ 0.00
    form.addEventListener("reset", function () {
        setTimeout(function () {
            resetDisplay();
        }, 0);
    });

    // On page load, keep the output at ₹ 0.00 until "Calculate Interest" is clicked
    resetDisplay();
}
