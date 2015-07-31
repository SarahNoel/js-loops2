var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];
// show all
for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
}
// Problem 1
for (var i = 0; i < students.length; i++) {
  if(i < 4) {console.log(
    students[i]);
  }
}

// Problem 2
for (var i = 0; i < students.length; i++) {
  if(i % 2 === 0) {console.log(
    students[i]);
  }
}

// Problem 3
 for (var i = 4; i >= 0; i--) {
  console.log(students[i]);
}

// Problem 4
 for (var i = 0; i < students.length; i++) {
  if (i === 0 || i === 4) {
  console.log(students[i]);
  }
  else {console.log(students[i]);
        console.log(students[i]);
  }
}

