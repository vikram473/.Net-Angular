const marks = [65, 78, 82, 90, 74];

const calculateTotal = arr =>
    arr.reduce((sum, mark) => sum + mark, 0);

const calculateAverage = arr =>
    calculateTotal(arr) / arr.length;

const total = calculateTotal(marks);
const average = calculateAverage(marks);

const result = average >= 40 ? "PASS" : "FAIL";

document.getElementById("output").innerHTML = `
    <p>Marks: ${marks.map(m => m).join(", ")}</p>
    <p>Total: ${total}</p>
    <p>Average: ${average.toFixed(2)}</p>
    <p>Result: ${result}</p>
`;