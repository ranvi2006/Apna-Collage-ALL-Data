class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`i am ${this.name}`);
    }
}

class Student extends Person{
           constructor(name,age,marks){
             super(name,age);
             this.marks=marks;
           }
}
class Teacher extends Person{
    constructor(name,age,sub){
      super(name,age);
      this.sub=sub;
    }
}

let s1=new Student("Raju Kumar Mandal",20,99);
let t1=new Teacher("Ajay Mathur",35,"Math");
console.log(`s1: ${s1.name},${s1.age}.${s1.marks},${s1.talk()}`);
console.log(`t1: ${t1.name},${t1.age}.${t1.sub},${t1.talk()}`);