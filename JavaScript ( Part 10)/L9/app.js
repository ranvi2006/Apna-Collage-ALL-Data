
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let name=form.elements[0].value;
  let email=form.elements[1].value;
  alert(`hii ${name}, your Email is ${email}`);
});

