var par = document.createElement("p");
par.innerHTML="Aceasta este descrierea formularului!!!";

document.getElementById("descriere formular").appendChild(par);


getRandomColor=function(){
    
   
   var culoare='#' + parseInt(Math.random() * 0xffffff).toString(16);
   return culoare;
}
var time;
schimbareCuloare = function(){

    document.body.style.backgroundColor=getRandomColor();
    //clearTimeout(time);
    time=setTimeout(schimbareCuloare,1000);
}
schimbareCuloare();
//var interval = setInterval(schimbareCuloare() , 5000);
//interval;
 
 //clearInterval(interval);

 var btn = document.getElementById("btn-culoare");
 btn.addEventListener("click", function(){

    clearTimeout(time);
 });

nrLi=document.getElementsByTagName("li").length;

var paragraf = document.createElement("p");
paragraf.innerHTML=nrLi;

document.getElementById("nr-elem").appendChild(paragraf);
 
var btnAsc = document.getElementById("btn-ascunde");
 btnAsc.addEventListener("click", function(){

   
   // var x = document.getElementsByClassName("area")[0];
   var x = document.getElementById("cerinte")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 });
var pauza=document.createElement("div");
document.body.appendChild(pauza);
pauza.style.height="353%";
pauza.style.width="100%";
pauza.style.backgroundColor="black";
pauza.style.display="none";
pauza.style.opacity="0.6";
pauza.style.top="0";
pauza.style.left="0";
pauza.style.position="absolute";
 document.body.addEventListener("keydown",function(event){
    var tasta = event.keyCode;
if (tasta === 27){
    if(pauza.style.display==="none")
    {
        pauza.style.display="";
    }
    else{
        pauza.style.display="none";
    }
}


});

//2. Formular
verificareInput = function(){
  if(document.getElementsByTagName("input")[0].value=="" || document.getElementsByTagName("input")[1].value=="")
      {document.getElementsByClassName("area")[0].style.backgroundColor="red";}
    else
     { document.getElementsByClassName("area")[0].style.backgroundColor="green";}
}

catchSubmit = function(){
  verificareInput();
  var email= document.getElementsByTagName("input")[0].value;
  var parola= document.getElementsByTagName("input")[1].value;
  var range= document.getElementsByTagName("input")[2].value;
  var an= document.getElementsByTagName("select")[0].value;
  var bifa= document.getElementsByTagName("input")[3].value;
  var par = document.createElement("p");
  var bre = document.createElement("br");
  par.innerHTML=email + " " + parola +" " + range +" " + an + " " + bifa;
  document.getElementsByClassName("area")[0].appendChild(par);
  document.getElementsByClassName("area")[0].appendChild(bre);

}
var btnSubmit=document.getElementById("submit");
btnSubmit.addEventListener("click", catchSubmit);


var opt3 = document.createElement("option");
var opt4 = document.createElement("option");
opt3.innerHTML=3;
opt4.innerHTML=4;
document.getElementById("exampleFormControlSelect1").appendChild(opt3);
document.getElementById("exampleFormControlSelect1").appendChild(opt4);


dezactivareSubmit = function(){
  this.btnSubmit.style.opacity=0.5;
  this.btnSubmit.disabled=true;
  btnSubmit.style.cursor="not-allowed";
}

window.onload=function(){
  if(check.checked==true)
  {
    this.btnSubmit.style.opacity=1;
    this.btnSubmit.disabled=false;
    btnSubmit.style.cursor="click";
  }
}

var check = document.getElementById("exampleCheck1");
check.onchange = function(){
  if(check.checked==true)
  {
    this.btnSubmit.style.opacity=1;
    this.btnSubmit.disabled=false;
    btnSubmit.style.cursor="click";
  }
}

//window.onload = dezactivareSubmit();


//trimite pe mail daca nu mai faci-> de term
/*
black
opacity:0.5;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
*/