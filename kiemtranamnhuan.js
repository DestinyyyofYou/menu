function checkYear() {
    var inputYear = document.getElementById("yearInput").value;
    var year = parseInt(inputYear);

    if (isNaN(year)) {
        document.getElementById("result").innerHTML = "Please enter a valid year.";
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("result").innerHTML = year + " is a leap year!";
    } else {
        document.getElementById("result").innerHTML = year + " is not a leap year.";
    }
}