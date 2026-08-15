
//--------question-1----------
//var studentNames = [];

//--------question-2----------
//var studentNames = {};

//-------question-3----------
//var students = ["Ali", "Ahmed", "Abdul"];

//--------question-4----------
//var numbers = [10, 20, 30, 40, 50];

//--------question-5----------
//var booleans = [true, false, true, false];

//--------question-6----------
//var mixedArray = ["Ali", 25, true, 3.14];

//--------question-7----------
//var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//document.write("Educational Qualifications in Pakistan<br>");

//document.write(qualifications[0] + "<br>");
//document.write(qualifications[1] + "<br>");
//document.write(qualifications[2] + "<br>");
//document.write(qualifications[3] + "<br>");
//document.write(qualifications[4] + "<br>");
//document.write(qualifications[5] + "<br>");
//document.write(qualifications[6] + "<br>");
//document.write(qualifications[7] + "<br>");

//--------question-8----------
// var studentname = [prompt("Student 1 Name"), prompt("Student 2 Name"), prompt("Student 3 Name")]
// var studentscore = [prompt("Student 1 Score"), prompt("Student 2 Score"), prompt("Student 3 Score")];

// var totalscore = 500;

// var percentage1 = (studentscore[0] / totalscore) * 100;
// var percentage2 = (studentscore[1] / totalscore) * 100;
// var percentage3 = (studentscore[2] / totalscore) * 100;

// document.write("Score of " + studentname[0] + " " + studentscore[0] + " Percentage: " + percentage1 + "%<br>");
// document.write("Score of " + studentname[1] + " " + studentscore[1] + " Percentage: " + percentage2 + "%<br>");
// document.write("Score of " + studentname[2] + " " + studentscore[2] + " Percentage: " + percentage3 + "%");

//--------question-9----------
// var colors = ["Red", "Green", "Blue"];

// document.write("<h3>Initial Array:</h3>");
// document.write(colors + "<br><br>");

// var color1 = prompt("Enter a color to add at the beginning:");
// colors.unshift(color1);

// document.write("<h3>After adding color at beginning:</h3>");
// document.write(colors + "<br><br>");

// var color2 = prompt("Enter a color to add at the end:");
// colors.push(color2);

// document.write("<h3>After adding color at end:</h3>");
// document.write(colors + "<br><br>");

// colors.unshift("Yellow", "Purple");

// document.write("<h3>After adding two colors at beginning:</h3>");
// document.write(colors + "<br><br>");

// colors.shift();

// document.write("<h3>After deleting first color:</h3>");
// document.write(colors + "<br><br>");

// colors.pop();

// document.write("<h3>After deleting last color:</h3>");
// document.write(colors + "<br><br>");

// var index = prompt("Enter index where you want to add color:");
// var newColor = prompt("Enter color name:");

// colors.splice(index, 0, newColor);

// document.write("<h3>After adding color at desired index:</h3>");
// document.write(colors + "<br><br>");

// // g. Delete colors from desired index
// var deleteIndex = prompt("Enter index from where you want to delete:");
// var deleteCount = prompt("How many colors do you want to delete?");

// colors.splice(deleteIndex, deleteCount);

// document.write("<h3>Final Array:</h3>");
// document.write(colors);

//--------question-10----------

// var scores = [85, 45, 72, 90, 60];

// document.write("Original Scores:");
// document.write(scores + "<br><br>");
// scores.sort(function(a, b) {
//     return a - b;
// });
// document.write("Scores in Ascending Order:");
// document.write(scores);

//--------question-11----------
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var selectedCities = cities.slice(0, 3);

// document.write("Cities Array:");
// document.write(cities + "<br><br>");
// document.write("Selected Cities:");
// document.write(selectedCities);

//--------question-12----------
//var arr = ["This ", "is ", "my ", "cat"];
//var result = arr.join("");
//document.write(result);

//--------question-13----------
// var devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices:<br>");
// document.write(devices + "<br><br>");
// document.write("Out:<br>");
// document.write(devices.shift() + "<br>");
// document.write("Out:<br>");
// document.write(devices.shift() + "<br>");
// document.write("Out:<br>");
// document.write(devices.shift() + "<br>");
// document.write("Out:<br>");
// document.write(devices.shift());

//--------question-14----------
// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("Devices:<br>");
// document.write(devices + "<br><br>");
// document.write("Out:<br>");
// document.write(devices.pop() + "<br>");
// document.write("Out:<br>");
// document.write(devices.pop() + "<br>");
// document.write("Out:<br>");
// document.write(devices.pop() + "<br>");
// document.write("Out:<br>");
// document.write(devices.pop());

//--------question-14----------
// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for (var i = 0; i < phones.length; i++) {
//     document.write("<option>" + phones[i] + "</option>");
// }
// document.write("</select>");
                                      //--------The End----------