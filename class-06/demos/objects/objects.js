const students = [
  {
  name: 'Sarah',
  hair: 'brown',
  height: 63,
  shoeSize: 8.5
},
  {
  name: 'Andrew',
  hair: 'brown',
  height: 70,
  shoeSize: 10.5
},
  {
  name: 'Paul',
  hair: 'brown',
  height: 68,
  shoeSize: 9
}]

const paul = {
  name: 'Paul',
  hair: 'brown',
  height: 68,
  shoeSize: 9
}

// Object.keys(paul);
// Object.values(paul);
// Object.entries(paul);

// console.log(students);

let names = [];

students.forEach(student => {
  names.push(student.name);
})

console.log('my student\'s names are:', names);