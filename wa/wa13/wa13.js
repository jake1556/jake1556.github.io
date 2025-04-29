/ Problem 1

const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];
console.log('Problem 1')
console.log(employees);



// Problem 2

const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log('Problem 2')
console.log(company);



// Problem 3

company.employees.push({
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
});
console.log('Problem 3')
console.log(company);



// Problem 4

let totalSalary = 0;
for (let i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary;
}
console.log(⁠ Problem 4: Total salary for all company employees = ${totalSalary} ⁠);



// Problem 5

function itsRaiseTime() {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].raiseEligible) {
            const raise = company.employees[i].salary * 0.1;
            company.employees[i].salary += raise;
            company.employees[i].raiseEligible = false;
        }
    }
}
itsRaiseTime();
console.log('Problem 5')
console.log(company);



// Problem 6

workFromHomeArray = ['Anna', 'Sam'];

for (let i = 0; i < employees.length; i++) {
    if (workFromHomeArray.includes(employees[i].firstName)) {
        company.employees[i].wfh = true;
    }
    else {
        company.employees[i].wfh = false;
    }
}
console.log('Problem 6')
console.log(company);