class Amod {
  //    private name:string; 
  name: string;
  setName(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
    this.getlength();// call private function
  }
  private getlength(){
    console.log(this.name.length)
  }
}
let a = new Amod();
a.setName("Nabeel");
// a.name = "khan"; only access in public modifier
a.getName();
