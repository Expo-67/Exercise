const student = {
  firstName: "Oliver",
  lastName: "Queen",
  age: 15,
};

if (student.age <= 27) {
  console.log(`${student.firstName} ${student.lastName} Gen Z.`);
} else if (student.age <= 42) {
  console.log(`${student.firstName} ${student.lastName}  Millennial.`);
} else if (student.age <= 77) {
  console.log(`${student.firstName} ${student.lastName} Boomer.`);
} else {
  console.log(
    `${student.firstName} ${student.lastName} generation before Boomers.`
  );
}
