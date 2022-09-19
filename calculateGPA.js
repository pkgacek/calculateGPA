const GRADES_LIST = {
    A: 4,
    "A-": 3.7,
    "B+": 3.3,
    B: 3,
    "B-": 2.7,
    "C+": 2.3,
    C: 2,
    "C-": 1.7,
    "D+": 1.3,
    D: 1,
    "D-": 0.7,
    F: 0
};

/**
 * @name calculateGPA
 * @description Calculate average GPA score
 * @param  {Array} grades
 * @returns  {Number} Average GPA score
 */
function calculateGPA(grades) {
    // Check if grades is an array
    if (!Array.isArray(grades)) {
        throw new Error("[Error] No array of grades provided");
    }

    const gradesCount = grades.length;

    // Check if grades array is not empty
    if (gradesCount === 0) {
        throw new Error("[Error] Provided array of grades is empty");
    }

    // Calcualte total score
    const totalScore = grades.reduce(
        (prevVal, currVal) => prevVal + GRADES_LIST[currVal],
        0
    );

    // Get average score
    const averageScore = totalScore / gradesCount;

    // Return the score roudned up to the first decimal point
    return Math.round(averageScore * 10) / 10;
}

console.assert(calculateGPA(["A"]) === 4, "The result is not 4");
console.assert(calculateGPA(["F", "F", "F"]) === 0, "The result is not 0");
console.assert(
    calculateGPA(["A", "A-", "B+", "B", "B-"]) === 3.3,
    "The result is not 3.3"
);
console.assert(
    calculateGPA(["A", "B+", "C-", "A"]) === 3.3,
    "The result is not 3.3"
);
