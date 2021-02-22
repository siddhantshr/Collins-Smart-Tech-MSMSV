function get_feet_to_meters(feet) {
    return feet / 3.281
}

function get_pounds_to_kgs(p) {
    return p / 2.205;
}

function check_bmi(bmi) {
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "overweight";
    } else {
        return "obese";
    }
}

function BMI() {
    // fetching the data & error handling
    let h = Number(document.getElementById('h').value);
    let w = Number(document.getElementById('w').value);
    if (!h) {
        document.getElementById("result").innerHTML = "Your Inputted height is not a valid number";
        return;
    }
    if (!w) {
        document.getElementById("result").innerHTML = "Your Inputted weight is not a valid number";
        return;
    }
    let weight_units = document.getElementById("weight-units").value;
    let height_units = document.getElementById("height-units").value;

    // converting to meters to kgs
    if (height_units == "feet") {
        h = get_feet_to_meters(h)
    }
    if (weight_units == "lb") {
        w = get_pounds_to_kgs(w)
    }

    // calculate the BMI
    let bmi_unrounded = w / Math.pow(h, 2)
    let bmi = (bmi_unrounded.toFixed(2));

    // displaying the BMI
    document.getElementById("result").innerHTML = `Your BMI is ${bmi}, Your BMI is considered: ${check_bmi(bmi)}`;
}