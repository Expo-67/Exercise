const student = {
  firstName: "Oliver",
  lastName: "Queen",
  age: 26,
};
const student2 = {
  firstName: "Clark",
  lastName: "Kent",
  age: 29,
};
const student3 = {
  firstName: "Diana",
  lastName: "Prince",
  age: 38,
};
function studentGeneration(student) {
  const { age } = student;
}

if (student.age > 18 && student.age <= 35) {
  console.log(`${student.firstName} ${student.lastName} Gen Z.`);
} else if (student.age > 36 && student.age <= 42) {
  console.log(`${student.firstName} ${student.lastName}  Millennial.`);
} else if (student.age > 43 && student.age <= 70) {
  console.log(`${student.firstName} ${student.lastName} Boomer.`);
} else {
  console.log(
    `${student.firstName} ${student.lastName} generation before Boomers.`
  );
}

studentGeneration(student);
studentGeneration(student2);
studentGeneration(student3);
