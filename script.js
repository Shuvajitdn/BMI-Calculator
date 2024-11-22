function calculateBMI() {
    // Get inputs for height, weight, and age
    var heightFeet = document.getElementById("heightFeet");
    var heightInches = document.getElementById("heightInches");
    var weightInput = document.getElementById("weight");
    var ageInput = document.getElementById("age");
    var resultDiv = document.getElementById("result");
  
    // Get values from the inputs
    var feet = parseFloat(heightFeet.value);
    var inches = parseFloat(heightInches.value);
    var weight = parseFloat(weightInput.value);
    var age = parseFloat(ageInput.value);
  
    // Validate the inputs
    if (isNaN(feet) || isNaN(inches) || isNaN(weight) || isNaN(age) || feet < 0 || inches < 0 || weight <= 0 || age <= 0) {
      resultDiv.innerHTML = "Please enter valid height, weight, and age.";
      return;
    }
  
    // Convert height to centimeters
    var heightInCm = (feet * 30.48) + (inches * 2.54); // 1 foot = 30.48 cm, 1 inch = 2.54 cm
  
    // Calculate BMI
    var bmi = weight / ((heightInCm / 100) ** 2);
    var category = "";
  
    // Determine BMI category
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    // Display the result
    if (age < 18) {
      resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}). Please consult a healthcare provider for a proper evaluation.`;
    } else {
      resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
    }
  }
  