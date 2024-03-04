//<img src="https://flagsapi.com/BE/shiny/64.png"></img>
let rateURL='https://v6.exchangerate-api.com/v6/4eea7650e99ad79e8b37471a/latest/USD';
let dropdowns=document.querySelectorAll(".line2 select");
let msg=document.querySelector(".para");
let btn=document.querySelector("button");
let toselect=document.querySelector('.to');
let fselect = document.querySelector(".from");
let amaunt=document.querySelector("input");
let camount=1;
let FROM='USD';
let TO='INR';


for(let select of dropdowns){         //for adding all country code in option
    for(let currcode in countryList){
        let newopt=document.createElement('option');
        currname = codetocoun[countryList[currcode]] + "(" + currcode + ")";
        newopt.innerText=currname;
        newopt.value=currcode;
        select.append(newopt);

    }
}

async function Ans(fcurr,tcurr,val){       //for finding exchange value
   let response=await fetch(rateURL);
   let data= await response.json();
   let ratelist=data.conversion_rates;
   let rate=ratelist[tcurr]/ratelist[fcurr];
   let ans=val*rate;
   return ans;
}

let showmsg =async (fcurr, tcurr, val) => {     //for showing the answers
  let a = await Ans(fcurr, tcurr, val);
  let msgcontent = val +" "+ fcurr + " = " + a +" "+ tcurr;
  msg.innerText = msgcontent;
  
}

fselect.addEventListener("change",(evt)=>{       //for chaning flag and taking input from dropdown 1.
    FROM = evt.target.value;
    let flg=document.querySelector(".fimg");
    flg.src = `https://flagsapi.com/${countryList[FROM]}/shiny/64.png`;
    showmsg(FROM, TO, camount);
})

toselect.addEventListener("change",(evt) => {    //for chaning flag and taking input from dropdown 1.
  TO = evt.target.value;
  let flg = document.querySelector(".timg");
  flg.src = `https://flagsapi.com/${countryList[TO]}/shiny/64.png`;
  showmsg(FROM, TO, camount);
});

btn.addEventListener("click",valuetaking);

document.addEventListener("keydown", function (event) {
   if (event.key === "Enter") {
     valuetaking();
   }
 });

function valuetaking(){
    if(amaunt.value>0){camount = amaunt.value;}
    else{
      amaunt.value="1";
      camount=1;
    }
    showmsg(FROM,TO,camount);
    
}



// let x="https://restcountries.com/v2/all";

// async function suno(){
//   let p=await fetch(x);
//   let q=await p.json();
  
//   for (let key in q) {
//     console.log(q[key].alpha2Code + " : '" + q[key].name+"',");
//   }
// }

// suno();



 

 





