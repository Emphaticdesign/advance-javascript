const student = [
    {id:1, name:"rayhan hossain"},
    {id:3, name:"omorsani meya"}, 
    {id:4, name:"abdul kadir"},
    {id:5, name:"DeepJol"}
];
const name = student.map(s => s.name);
const id = student.map(s => s.id);
const bigger = student.filter(s => s.id > 3);
const biggerOne = student.find(s => s.id > 3);
console.log(biggerOne);