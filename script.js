date = new Date();
year = date.getFullYear();
var options = { month: "short" };
var month = date.toLocaleString("en-US", options);
// month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = day + " / " + month + " / " + year;