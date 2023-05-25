// Input field validation
function validateForm() {
  var j = document.getElementById("sname").value;
  var k = document.getElementById("sage").value;
  var l = document.getElementById("saddress").value;
  var m = document.getElementById("semail").value;

  if (j == "") {
    alert("Name is required");
    return false;
  }

  if (k == "") {
    alert("Age is required");
    return false;
  } else if (sage < 1) {
    alert("Age must be positive number");
    return false;
  }

  if (l == "") {
    alert("Address is required");
    return false;
  }

  if (m == "") {
    alert("Email is required");
    return false;
  }
  return true;
}

//Add data with validation
function addDataValidation() {
  if (validateForm() == true) {
    let j = document.getElementById("sname").value;
    let k = document.getElementById("sage").value;
    let l = document.getElementById("saddress").value;
    let m = document.getElementById("semail").value;
    var studentList;
    if (localStorage.getItem("studentList") == null) {
      studentList = [];
    } else {
      studentList = JSON.parse(localStorage.getItem("studentList"));
    }
    studentList.push({
      sname: j,
      sage: k,
      saddress: l,
      semail: m,
    });
    localStorage.setItem("studentList", JSON.stringify(studentList));
    showData();
    document.getElementById("sname").value = "";
    document.getElementById("sage").value = "";
    document.getElementById("saddress").value = "";
    document.getElementById("semail").value = "";
  }
}

//Show data
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
      ')" class="btn btn-primary btn-edit">Edit</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}
document.onload = showData();

//Delete data
function deleteData(index) {
  var studentList;
  if (localStorage.getItem("studentList") == null) {
    studentList = [];
  } else {
    studentList = JSON.parse(localStorage.getItem("studentList"));
  }
  studentList.splice(index, 1);
  // console.log(studentList.splice(index, 1));
  localStorage.setItem("studentList", JSON.stringify(studentList));
  showData();
}

//Add data without validation
// function addData() {
//   let j = document.getElementById("sname").value;
//   let k = document.getElementById("sage").value;
//   let l = document.getElementById("saddress").value;
//   let m = document.getElementById("semail").value;
//   var studentList;
//   if (localStorage.getItem("studentList") == null) {
//     studentList = [];
//   } else {
//     studentList = JSON.parse(localStorage.getItem("studentList"));
//   }
//   studentList.push({
//     sname: j,
//     sage: k,
//     saddress: l,
//     semail: m,
//   });
//   localStorage.setItem("studentList", JSON.stringify(studentList));
//   showData();
//   document.getElementById("sname").value = "";
//   document.getElementById("sage").value = "";
//   document.getElementById("saddress").value = "";
//   document.getElementById("semail").value = "";
// }

//Set the value of the specified local storage item setItem
// Convert a JavaScript object into a string with JSON.stringify().
//Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
// The splice() method adds and/or removes array elements.
