
const age_box = document.getElementById("age_box");
const result = document.getElementById("result");

function convert() {
    const birthDate = new Date(age_box.value);

    if (!age_box.value) {
        result.textContent = "Please select your date of birth";
        return;
    }

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    result.textContent = `Your age is ${age} years old`;
}