

// BMI calculation function
function bmiCalculate() {
    // Get height and weight values
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);

    // Get unit values
    let height_unit = document.querySelector(".heightUnit").value;
    let weight_unit = document.querySelector(".weightUnit").value;

    // Validate inputs
    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid values for height and weight.");
        return;
    }

    // Convert height to meters
    if (height_unit === "ft") {
        height = height * 0.3048;
    } else if (height_unit === "cm") {
        height = height / 100;
    }
    // If already in meters, do nothing

    // Convert weight to kg
    if (weight_unit === "g") {
        weight = weight / 1000;
    } else if (weight_unit === "pounds") {
        weight = weight * 0.453592;
    }
    // If already in kg, do nothing

    // Calculate BMI
    let bmi = (weight / (height * height)).toFixed(2);
    alert("Your BMI is: " + bmi);
}

let button = document.querySelector("button");

button.addEventListener("click",()=>{
    bmiCalculate();
});



