/* Filter Takes in 5 Parameters 
CallBack & element, otherwise it takes in the index, array, and thisArg*/


const students = [
    {id:1, name:"Michael", state: 'NH'},
    {id:2, name:"Zack", state:'GA'},
    {id:3, name:"Samantha", state: 'OH'},
    {id:4, name:"Rachel", state:"GA"},
    {id:4, name:"Barb", state: "GA"}
    
]

const georgiaStudents = students.filter(student => student.state === "GA");
console.log(georgiaStudents);

const liveInGeorgia = (student) => {
return student.state === 'GA'
}

/* Can also use a callback funciton like above*/

const secondWayWithCB = students.filter(liveInGeorgia, students);
console.log(secondWayWithCB);