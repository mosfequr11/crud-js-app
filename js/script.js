// console.log("hellow world");
// function validateForm() {
//   var name = document.getElementById("sname");
//   var age = document.getElementById("sage");
//   var address = document.getElementById("saddress");
//   var email = document.getElementById("semail");

//   if (name == "") {
//     alert("Name is required");
//     return false;
//   }

//   if (age == "") {
//     alert("Age is required");
//     return false;
//   } else if (sage < 1) {
//     alert("Age must be positive number");
//     return false;
//   }

//   if (address == "") {
//     alert("Address is required");
//     return false;
//   }

//   if (email == "") {
//     alert("Email is required");
//     return false;
//   }
//   //  else if (!semail.includes("@")) {
//   //   alert("Invalid Email address");
//   //   return false;
//   // }
//   return true;
// }

//Add Data
function addData() {
  // console.log("hellow");
  // if (validateForm() == true) {
  var sname = (document.getElementById("sname").value = "");
  var sage = (document.getElementById("sage").value = "");
  var saddress = (document.getElementById("saddress").value = "");
  var semail = (document.getElementById("semail").value = "");
  //   var studentList;
  //   studentList = [];
  // } else {
  studentList = JSON.parse(localStorage.getItem("studentList"));
  //Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
  //first name then value or variable name
  studentList.push({
    sname: sname,
    sage: sage,
    saddress: saddress,
    semail: semail,
  });

  localStorage.setItem("studentList", JSON.stringify(studentList));
  showData();
  document.getElementById("sname").value = "";
  document.getElementById("sage").value = "";
  document.getElementById("saddress").value = "";
  document.getElementById("semail").value = "";
  // }
}

//Show Data
function showData() {
  var studentList;
  if (localStorage.getItem("studentList") == null) {
    studentList = [];
  } else {
    studentList = JSON.parse(localStorage.getItem("studentList"));
  }
  var html = "";
  let i = 0;
  studentList.forEach(function (element, index) {
    i++;
    html += "<tr>";
    html += "<td>" + i + "</td>";
    html += "<td>" + element.sname + "</td>";
    html += "<td>" + element.sage + "</td>";
    html += "<td>" + element.saddress + "</td>";
    html += "<td>" + element.semail + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger ">Delete</button><button onclick="editData(' +
      index +
      ')" class="btn btn-primary ms-10">Edit</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}
document.onload = showData();

//Delete Data

//Set the value of the specified local storage item
// Convert a JavaScript object into a string with JSON.stringify().
//Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
// The splice() method adds and/or removes array elements.
function deleteData(index) {
  var studentList;
  if (localStorage.getItem("studentList") == null) {
    studentList = [];
  } else {
    studentList = JSON.parse(localStorage.getItem("studentList"));
  }
  // studentList.splice(index, 1);
  console.log(studentList.splice(index, 1));

  localStorage.setItem("studentList", JSON.stringify(studentList));
  showData();
}
