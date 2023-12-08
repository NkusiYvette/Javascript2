let students = [];

let addStudent = true;

while (addStudent) {
    let name = prompt("Enter student's name:");
    let id = prompt("Enter student's ID:");
    let department = prompt("Enter student's department:");

    students.push({ name, id, department });

    let continueAdding = prompt("Do you want to continue adding students? (Yes/No)").toLowerCase();

    if (continueAdding !== 'yes') {
        addStudent = false;
    }
}

console.log("Registered students:");
students.forEach(student => {
    console.log(`Name: ${student.name}, ID: ${student.id}, Department: ${student.department}`);
});