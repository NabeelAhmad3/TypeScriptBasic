class Constructor{
    name:"";
    age:0;
    email:"";
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    cons_call(){
        console.log(this.name,this.age,this.email)
    }
}
const object=new Constructor('khan',23,'ahmad@gmail.com');
object.cons_call();