const BUTTONS=[

{
text:"Glow",
background:"linear-gradient(45deg,#ff0080,#7928ca)",
color:"#fff",
borderRadius:"50px",
boxShadow:"0 0 60px #ff0080"
},

{
text:"Glass",
background:"rgba(255,255,255,.15)",
border:"1px solid rgba(255,255,255,.3)",
color:"#fff",
borderRadius:"18px"
},

{
text:"Cyber",
background:"linear-gradient(90deg,#00f5ff,#0066ff)",
color:"#fff",
borderRadius:"25px"
}

];

const live =
document.getElementById("liveButton");

let current=0;

function loadButton(){

live.innerHTML="";

const btn=
document.createElement("button");

btn.className=
"bg-btn show";

Object.assign(
btn.style,
BUTTONS[current]
);

btn.innerText=
BUTTONS[current].text;

live.appendChild(btn);


/* auto hover loop */

setTimeout(()=>{

btn.classList.add(
"auto-hover"
);

setTimeout(()=>{

btn.classList.remove(
"auto-hover"
);

},1200);

},800);


current=
(current+1)
%
BUTTONS.length;

}

loadButton();

setInterval(
loadButton,
3500
);