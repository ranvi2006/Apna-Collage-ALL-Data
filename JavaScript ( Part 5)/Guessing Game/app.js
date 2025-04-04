

while(true)
    {
        let number=Math.floor(Math.random()*10)+1;
        console.log(number);
    let ur=prompt("Guss the Number between 1 to 10 Or Press 999 to exit the Game");
    if(ur==999)
    {
        console.log("quiting the app");
        break;
    }

    if(ur==number)
    {
        console.log("Fantasic ! you guessed right number");
        break;
    }
    else{
        console.log("Batter luck next Time 'Try Again'");
    }
  
}