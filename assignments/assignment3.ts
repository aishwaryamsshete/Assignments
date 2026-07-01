/*1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0*/



let names: string[]=["Suresh","Mahesh","Naresh"]
let marks: number[]= [75, 80, 82]

const updatedMarks: number[]=[]
let total=0

for (let i = 0; i < marks.length; i++){
    updatedMarks[i] = marks[i]! + 10;
    total += updatedMarks[i]!;
   
}

// Calculate average
const average = total / updatedMarks.length;

// Print output
console.log("Updated Marks:");

for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]}: ${updatedMarks[i]}`);
}

console.log(`Average Marks: ${average}`);