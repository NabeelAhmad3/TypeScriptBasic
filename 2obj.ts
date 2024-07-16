// const person:{name:string,age:number,email:string}={
//     name:"Nabeel ",
//     age:34,
//     email:"khan@gmail.com"
// }
// console.log(person)

// ---------if more than one function define type first and then call where u want
type objType={name:string,age:number,email:string}

const person:objType={
    name:"Nabeel ",
    age:34,
    email:"khan@gmail.com"
}
console.log(person.name)

const person2:objType={
    name:"khan ",
    age:33,
    email:"khan2@gmail.com"
}
console.log(person2.name)