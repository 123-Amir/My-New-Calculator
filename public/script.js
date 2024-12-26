document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category-title');

    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = category.parentElement;

            // Toggle active class to show/hide the sub-dropdown
            parent.classList.toggle('active');
        });
    });
});








/// Financial calculator 









// Simple Interest Calculator
function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('si-principal').value);
    const rate = parseFloat(document.getElementById('si-rate').value);
    const time = parseFloat(document.getElementById('si-time').value);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    document.getElementById('si-result').innerText = `Interest: ${interest.toFixed(2)}, Total: ${total.toFixed(2)}`;
}

// Compound Interest Calculator
function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('ci-principal').value);
    const rate = parseFloat(document.getElementById('ci-rate').value) / 100;
    const time = parseFloat(document.getElementById('ci-time').value);
    const frequency = parseInt(document.getElementById('ci-frequency').value);
    const compoundInterest = principal * Math.pow((1 + rate / frequency), frequency * time) - principal;
    const total = principal + compoundInterest;
    document.getElementById('ci-result').innerText = `Interest: ${compoundInterest.toFixed(2)}, Total: ${total.toFixed(2)}`;
}

// Currency Converter (Mock Example)
function convertCurrency() {
    const amount = parseFloat(document.getElementById('currency-amount').value);
    const conversionRate = 74; // Example: 1 USD = 74 INR
    const convertedAmount = amount * conversionRate;
    document.getElementById('currency-result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)}`;
}

// Salary Calculator
function calculateNetSalary() {
    const gross = parseFloat(document.getElementById('gross-salary').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const bonuses = parseFloat(document.getElementById('bonuses').value);
    const netSalary = gross - deductions + bonuses;
    document.getElementById('salary-result').innerText = `Net Salary: ${netSalary.toFixed(2)}`;
}

// Retirement Calculator
function calculateRetirementCorpus() {
    const currentAge = parseFloat(document.getElementById('current-age').value);
    const retirementAge = parseFloat(document.getElementById('retirement-age').value);
    const savings = parseFloat(document.getElementById('savings').value);
    const returnRate = parseFloat(document.getElementById('return-rate').value) / 100;
    const years = retirementAge - currentAge;
    const corpus = savings * Math.pow(1 + returnRate, years);
    document.getElementById('retirement-result').innerText = `Retirement Corpus: ${corpus.toFixed(2)}`;
}

// Sales and Tax Calculator
function calculateSalesTax() {
    const price = parseFloat(document.getElementById('price').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);
    const total = price + (price * taxRate / 100);
    document.getElementById('sales-tax-result').innerText = `Total Price: ${total.toFixed(2)}`;
}

// Investment Calculator
function calculateInvestmentReturns() {
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
    const contributions = parseFloat(document.getElementById('contributions').value);
    const returnRate = parseFloat(document.getElementById('investment-return-rate').value) / 100;
    const time = parseFloat(document.getElementById('investment-time').value);

    let totalInvestment = initialInvestment;
    for (let i = 0; i < time; i++) {
        totalInvestment = (totalInvestment + contributions) * (1 + returnRate);
    }

    document.getElementById('investment-result').innerText = `Total Returns: ${totalInvestment.toFixed(2)}`;
}







/// Scientific Calculator







let currentInput = "";
let memory = 0;

function clearDisplay() {
    currentInput = "";
    document.getElementById("result").value = currentInput;
}

function appendNumber(number) {
    currentInput += number;
    document.getElementById("result").value = currentInput;
}

function appendOperator(operator) {
    currentInput += " " + operator + " ";
    document.getElementById("result").value = currentInput;
}

function appendFunction(func) {
    currentInput += func + "(";
    document.getElementById("result").value = currentInput;
}

function appendParenthesis(paren) {
    currentInput += paren;
    document.getElementById("result").value = currentInput;
}

function calculate() {
    try {
        // Replace function names with JavaScript Math equivalents
        let result = eval(currentInput
            .replace(/sqrt/g, "Math.sqrt")
            .replace(/pow/g, "Math.pow")
            .replace(/log/g, "Math.log10")
            .replace(/ln/g, "Math.log")
            .replace(/sin/g, "Math.sin")
            .replace(/cos/g, "Math.cos")
            .replace(/tan/g, "Math.tan"));

        document.getElementById("result").value = result;
        currentInput = result.toString(); // Update input with result for further calculations
    } catch (e) {
        document.getElementById("result").value = "Error";
        currentInput = "";
    }
}

// Memory Functions
function memoryAdd() {
    try {
        let result = eval(currentInput);
        memory += result;
        currentInput = ""; // Clear input after adding to memory
        document.getElementById("result").value = "M+";
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function memorySubtract() {
    try {
        let result = eval(currentInput);
        memory -= result;
        currentInput = ""; // Clear input after subtracting from memory
        document.getElementById("result").value = "M-";
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function memoryRecall() {
    document.getElementById("result").value = memory;
    currentInput = memory.toString();
}

function memoryClear() {
    memory = 0;
    document.getElementById("result").value = "MC";
}








/// Conversion Calculators








// Length Calculator
function convertLength() {
    const length = parseFloat(document.getElementById('length-value').value);
    const fromUnit = document.getElementById('length-from-unit').value;
    const toUnit = document.getElementById('length-to-unit').value;

    const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        centimeters: 100,
        millimeters: 1000,
        inches: 39.3701,
        feet: 3.28084,
        yards: 1.09361,
        miles: 0.000621371
    };

    const result = length * (conversionRates[toUnit] / conversionRates[fromUnit]);
    document.getElementById('length-result').innerText = `Converted Length: ${result.toFixed(2)} ${toUnit}`;
}

// Age Calculator
function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById('age-result').innerText = `Age: ${age} years`;
}

// Hour to Minute & Seconds Calculator
function convertHours() {
    const hours = parseFloat(document.getElementById('hours').value);
    const minutes = hours * 60;
    const seconds = hours * 3600;
    document.getElementById('hours-result').innerText = `Minutes: ${minutes}, Seconds: ${seconds}`;
}

// Date Calculator
function calculateDateDuration() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('date-result').innerText = `Duration: ${diffDays} days`;
}

// GPA Calculator
function calculateGPA() {
    const courses = document.getElementById('courses').value.split(','); // Course names (comma-separated)
    const credits = document.getElementById('credits').value.split(',').map(Number); // Credit values
    const grades = document.getElementById('grades').value.split(',').map(Number); // Grade values

    if (courses.length !== credits.length || courses.length !== grades.length) {
        document.getElementById('gpa-result').innerText = 'Error: Ensure all inputs have the same number of entries.';
        return;
    }

    let totalCredits = 0;
    let weightedGrades = 0;
    for (let i = 0; i < courses.length; i++) {
        totalCredits += credits[i];
        weightedGrades += credits[i] * grades[i];
    }

    const gpa = weightedGrades / totalCredits;
    document.getElementById('gpa-result').innerText = `GPA: ${gpa.toFixed(2)}`;
}

// Height Calculator
function convertHeight() {
    const height = parseFloat(document.getElementById('height-value').value);
    const fromUnit = document.getElementById('height-from-unit').value;
    const toUnit = document.getElementById('height-to-unit').value;

    const conversionRates = {
        meters: 1,
        centimeters: 100,
        feet: 3.28084,
        inches: 39.3701
    };

    const result = height * (conversionRates[toUnit] / conversionRates[fromUnit]);
    document.getElementById('height-result').innerText = `Converted Height: ${result.toFixed(2)} ${toUnit}`;
}

// Password Generator
function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value);
    const includeSymbols = document.getElementById('password-symbols').checked;
    const includeNumbers = document.getElementById('password-numbers').checked;
    const includeUppercase = document.getElementById('password-uppercase').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password-result').innerText = `Generated Password: ${password}`;
}

// Bill and Tip Calculator
function calculateTotalBill() {
    const bill = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const total = bill + (bill * tipPercentage / 100);
    document.getElementById('bill-result').innerText = `Total Bill: ${total.toFixed(2)}`;
}







// geometry_calculator









// 2D Distance Calculator
function calculate2DDistance() {
    const x1 = parseFloat(document.getElementById('point1-x').value);
    const y1 = parseFloat(document.getElementById('point1-y').value);
    const x2 = parseFloat(document.getElementById('point2-x').value);
    const y2 = parseFloat(document.getElementById('point2-y').value);
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    document.getElementById('distance-2d-result').innerText = `Distance: ${distance.toFixed(2)}`;
}

// 3D Distance Calculator
function calculate3DDistance() {
    const x1 = parseFloat(document.getElementById('point1-x').value);
    const y1 = parseFloat(document.getElementById('point1-y').value);
    const z1 = parseFloat(document.getElementById('point1-z').value);
    const x2 = parseFloat(document.getElementById('point2-x').value);
    const y2 = parseFloat(document.getElementById('point2-y').value);
    const z2 = parseFloat(document.getElementById('point2-z').value);
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
    document.getElementById('distance-3d-result').innerText = `Distance: ${distance.toFixed(2)}`;
}

// Circle Calculator
function calculateCircle() {
    const radius = parseFloat(document.getElementById('circle-radius').value);
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    document.getElementById('circle-result').innerText = `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`;
}

// Equilateral Triangle Calculator
function calculateEquilateralTriangle() {
    const side = parseFloat(document.getElementById('triangle-side').value);
    const area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
    const perimeter = 3 * side;
    document.getElementById('triangle-result').innerText = `Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
}

// Isosceles Triangle Calculator
function calculateIsoscelesTriangle() {
    const base = parseFloat(document.getElementById('isosceles-base').value);
    const side = parseFloat(document.getElementById('isosceles-side').value);
    const height = Math.sqrt(Math.pow(side, 2) - Math.pow(base / 2, 2));
    const area = (base * height) / 2;
    const perimeter = 2 * side + base;
    document.getElementById('isosceles-result').innerText = `Area: ${area.toFixed(2)}, Perimeter: ${perimeter.toFixed(2)}`;
}

// Right-Angled Triangle Calculator
function calculateRightAngledTriangle() {
    const base = parseFloat(document.getElementById('right-base').value);
    const height = parseFloat(document.getElementById('right-height').value);
    const hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
    const area = (base * height) / 2;
    document.getElementById('right-result').innerText = `Area: ${area.toFixed(2)}, Hypotenuse: ${hypotenuse.toFixed(2)}`;
}

// Cube Calculator
function calculateCube() {
    const side = parseFloat(document.getElementById('cube-side').value);
    const volume = Math.pow(side, 3);
    const surfaceArea = 6 * Math.pow(side, 2);
    document.getElementById('cube-result').innerText = `Volume: ${volume.toFixed(2)}, Surface Area: ${surfaceArea.toFixed(2)}`;
}

// Cone Calculator
function calculateCone() {
    const radius = parseFloat(document.getElementById('cone-radius').value);
    const height = parseFloat(document.getElementById('cone-height').value);
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    const surfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    document.getElementById('cone-result').innerText = `Volume: ${volume.toFixed(2)}, Surface Area: ${surfaceArea.toFixed(2)}`;
}

// Sphere Calculator
function calculateSphere() {
    const radius = parseFloat(document.getElementById('sphere-radius').value);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
    document.getElementById('sphere-result').innerText = `Volume: ${volume.toFixed(2)}, Surface Area: ${surfaceArea.toFixed(2)}`;
}







// Maths&Algebra Calculator







// Complex Number Calculator
function calculateComplexNumber() {
    const real1 = parseFloat(document.getElementById('real1').value);
    const imag1 = parseFloat(document.getElementById('imag1').value);
    const real2 = parseFloat(document.getElementById('real2').value);
    const imag2 = parseFloat(document.getElementById('imag2').value);
    const sumReal = real1 + real2;
    const sumImag = imag1 + imag2;
    const diffReal = real1 - real2;
    const diffImag = imag1 - imag2;
    const prodReal = (real1 * real2) - (imag1 * imag2);
    const prodImag = (real1 * imag2) + (imag1 * real2);
    document.getElementById('complex-result').innerHTML = `
        Sum: ${sumReal} + ${sumImag}i<br>
        Difference: ${diffReal} + ${diffImag}i<br>
        Product: ${prodReal} + ${prodImag}i
    `;
}

// Boolean Algebra Simplifier (Placeholder function)
function simplifyBooleanAlgebra() {
    const expr = document.getElementById('boolean-expression').value;
    document.getElementById('boolean-result').innerText = `Simplified Expression: ${expr}`;
}

// Partial Fraction Decomposer (Placeholder function)
function decomposePartialFractions() {
    const func = document.getElementById('rational-function').value;
    document.getElementById('partial-fraction-result').innerText = `Decomposed Form of: ${func}`;
}

// Inequality Calculator (Placeholder function)
function calculateInequality() {
    const expr = document.getElementById('inequality-expression').value;
    document.getElementById('inequality-result').innerText = `Solution Set for: ${expr}`;
}

// Flow Rate Calculator
function calculateFlowRate() {
    const diameter = parseFloat(document.getElementById('pipe-diameter').value);
    const velocity = parseFloat(document.getElementById('flow-velocity').value);
    const area = Math.PI * Math.pow(diameter / 2, 2);
    const flowRate = area * velocity;
    document.getElementById('flow-rate-result').innerText = `Flow Rate: ${flowRate.toFixed(2)} m³/s`;
}

// Impulse Calculator
function calculateImpulse() {
    const force = parseFloat(document.getElementById('force').value);
    const time = parseFloat(document.getElementById('time').value);
    const impulse = force * time;
    document.getElementById('impulse-result').innerText = `Impulse: ${impulse.toFixed(2)} Ns`;
}

// Factorization Calculator
function calculateFactorization() {
    const num = parseInt(document.getElementById('integer').value);
    let factors = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    document.getElementById('factorization-result').innerText = `Factors: ${factors.join(', ')}`;
}

// Percentage Calculator
function calculatePercentage() {
    const originalValue = parseFloat(document.getElementById('original-value').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    const result = (originalValue * percentage) / 100;
    document.getElementById('percentage-result').innerText = `Result: ${result.toFixed(2)}`;
}

// Exponential Formulas Calculator
function calculateExponential() {
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);
    const result = Math.pow(base, exponent);
    document.getElementById('exponential-result').innerText = `Result: ${result.toFixed(2)}`;
}

// Cube of a Number Calculator
function calculateCube() {
    const number = parseFloat(document.getElementById('cube-number').value);
    const result = Math.pow(number, 3);
    document.getElementById('cube-result').innerText = `Cube: ${result.toFixed(2)}`;
}

// Cube Root Calculator
function calculateCubeRoot() {
    const number = parseFloat(document.getElementById('cube-root-number').value);
    const result = Math.cbrt(number);
    document.getElementById('cube-root-result').innerText = `Cube Root: ${result.toFixed(2)}`;
}







// Health & Fitness Calculator







// BMI Calculator
function calculateBMI() {
    const height = parseFloat(document.getElementById('height-bmi').value) / 100; // Convert to meters
    const weight = parseFloat(document.getElementById('weight-bmi').value);
    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal weight';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obesity';

    document.getElementById('bmi-result').innerText = `BMI: ${bmi.toFixed(2)} (${category})`;
}

// BMR Calculator
function calculateBMR() {
    const gender = document.getElementById('gender-bmr').value;
    const age = parseInt(document.getElementById('age-bmr').value);
    const weight = parseFloat(document.getElementById('weight-bmr').value);
    const height = parseFloat(document.getElementById('height-bmr').value);

    let bmr = 0;
    if (gender === 'male') {
        bmr = 66 + (13.75 * weight) + (5 * height) - (6.75 * age);
    } else {
        bmr = 655 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
    }

    document.getElementById('bmr-result').innerText = `Your BMR is ${bmr.toFixed(2)} kcal/day`;
}

// Calorie Calculator
function calculateCalories() {
    const activity = parseFloat(document.getElementById('activity-bmr').value);
    const age = parseInt(document.getElementById('age-calorie').value);
    const gender = document.getElementById('gender-calorie').value;
    const weight = parseFloat(document.getElementById('weight-calorie').value);
    const height = parseFloat(document.getElementById('height-calorie').value);

    let bmr = 0;
    if (gender === 'male') {
        bmr = 66 + (13.75 * weight) + (5 * height) - (6.75 * age);
    } else {
        bmr = 655 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
    }

    const calories = bmr * activity;
    document.getElementById('calorie-result').innerText = `Your daily calorie needs: ${calories.toFixed(2)} kcal/day`;
}

// Body Fat Calculator
function calculateBodyFat() {
    const gender = document.getElementById('gender-fat').value;
    const age = parseInt(document.getElementById('age-fat').value);
    const waist = parseFloat(document.getElementById('waist-fat').value);
    const neck = parseFloat(document.getElementById('neck-fat').value);

    let bodyFat = 0;
    if (gender === 'male') {
        bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
        bodyFat = 163.205 * Math.log10(waist + neck) - 97.684 * Math.log10(height) + 36.76;
    }

    document.getElementById('bodyfat-result').innerText = `Your body fat percentage is: ${bodyFat.toFixed(2)}%`;
}

// Ideal Weight Calculator
function calculateIdealWeight() {
    const gender = document.getElementById('gender-ideal').value;
    const height = parseFloat(document.getElementById('height-ideal').value);
    const age = parseInt(document.getElementById('age-ideal').value);
    const frame = document.getElementById('frame-size').value;

    let idealWeight = 0;

    if (gender === 'male') {
        idealWeight = 50 + 0.91 * (height - 152);
    } else {
        idealWeight = 45.5 + 0.91 * (height - 152);
    }

    document.getElementById('ideal-weight-result').innerText = `Your ideal weight is: ${idealWeight.toFixed(2)} kg`;
}
