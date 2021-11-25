let listItems = ["träna" , "kolla på serier", "lyssna på musik","laga mat", "boxning"]; //array

let list = document.createElement("ul");//skapar ul
list.setAttribute("id","ulList");//sätter ett id med ulList

document.body.append(list);//skriver ut ul i body



for (let i=0; i<listItems.length; i++ ){
    console.log(listItems[i]);
    
    //skapar li
    let li = document.createElement("li");
    
    console.log(listItems);

    
    li.textContent = listItems[i];
    
    document.getElementById("ulList").appendChild(li);

}

//// Påbyggnad av uppgiftern ^ är "uppgift 1" här nedanför är extra grejerna

let input = document.createElement("input");//input
input.setAttribute("id","input");//skapar id
input.placeholder="skriv vad du vill lägga till" //skapar en placeholder

document.body.append(input);//lägger till den i body





let btn = document.createElement("button"); //skapar knappen
btn.setAttribute("id","btn");// skapar id och sätter namn på id:et
btn.innerHTML= "Lägg till saker!";//text på knappen så användaren vet vad den ska göra


document.body.appendChild(btn);//lägger till den i body

let head1 = document.createElement("h1");
head1 = document.createTextNode("Extra lista!");
document.body.append(head1);

let ulExtra = document.createElement("ul");
document.body.append(ulExtra);



btn.addEventListener("click",function(){
    svar = input.value;
    console.log(svar);

    let liExtra =document.createElement("li");
    liExtra.textContent = svar;
    console.log(liExtra);

    ulExtra.appendChild(liExtra);
})


