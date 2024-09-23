let employees = ['John', 'Sarah', 'Eric'];

let moreNames = ['Kamal', 'John', 'Sarah', 'Eric'];

employees.forEach((i) => {
    moreNames.push(i);
});

console.log("push : " + moreNames);


moreNames.pop();
console.log("pop : " + moreNames);

moreNames.unshift('John Wick');
// add to front
console.log("unshift : " + moreNames);

let indexOfSarah = moreNames.indexOf('Sarah');
console.log("indexOf : " + indexOfSarah);


let salaries = [
    { name: 'John', salary: 1000 },
    { name: 'Sarah', salary: 2000 },
    { name: 'Eric', salary: 3000 }
];  // array of objects

console.log(salaries);
salaries.filter((s) => s.salary < 2000);

console.log("Filtered Salaries : -> ");
for(s in salaries){
    if(salaries[s].salary > 1000){ 
        console.log(salaries[s]);
    }
};
console.log(salaries.filter((s) => s.salary > 1000));
let first = salaries.find((s) => s.name === "Sarah")
console.log(first)

let nums = [1,2,3,4,5,6,7,8,9,10];
let nums2 = [11,12,13,14,15,16,17,18,19,20];
let sum = 0;
function sumArr(total, n){
    return total + n;
}
let concatArr = nums.concat(nums2);
sum = nums.reduce(sumArr, 0);
console.log(sum)

console.log(nums);
let slicedArr = nums.slice(0, 5);
console.log(slicedArr);
let splicedArr = nums.splice(0,3);
console.log(splicedArr);

console.log(concatArr);

let employee = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};

console.log(employee);
delete employee.position;
console.log(employee);

employee.department = 'IT';
console.log(employee);

for( e in employee) {
    console.log(employee[e]);
}

let projects = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

projects.map((p) => {
    console.log(p);
})
console.log("-------")
let inProgressProjects = projects.filter((p) => p.status === 'in progress');
console.log(inProgressProjects);

console.log("-------");
console.log("-------");

