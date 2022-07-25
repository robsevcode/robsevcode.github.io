window.onload = function() {
    document.getElementById("workTime").innerHTML = getWorkExperience("2021-11-01");
    document.getElementById("totalWorkTime").innerHTML = getWorkExperience("2019-08-30");
  };

  function getWorkExperience(date) {
    var today = new Date();
    var joinedDate = new Date(date);
    const numberOfDays = Math.ceil(Math.abs(today - joinedDate) / (1000 * 60 * 60 * 24));

    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";

    return `Time Worked: ${yearsDisplay} ${monthsDisplay} ${daysDisplay}`;
  }