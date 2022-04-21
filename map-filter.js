const student = [
      {id:21,name:"Omar sunny"},
      {id:27,name:"asad"},
      {id:29,name:"fahim"},
      {id:57,name:"mahadi"}
]
 //const StuName =[];
// for (let i=0;i<student.length;i++){
//       StuName.push(student[i].name);
// }

// console.log(StuName);
const stuName = student.map(N=>N.name);
console.log(stuName);
const stuid = student.filter(N=>N.id<30);
console.log(stuid);
const stuidFind = student.find(N=>N.id<30);
console.log(stuidFind);