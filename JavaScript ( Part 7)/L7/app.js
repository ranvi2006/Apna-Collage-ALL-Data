
const student={
    name:"Raju Kumar Mandal",
    age:20,
    city:"suriya",
    ob:this,
    func1()
    {
        console.log(this);
    },
    func:()=>{
console.log(this);
    }
}

student.func1();
student.func();

