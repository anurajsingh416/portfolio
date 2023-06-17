// ---------------------------about----------------------------
let tablinks=document.getElementsByClassName('tab-links');
let tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// -------------menu-------------

let close=document.getElementById('close');
let open=document.getElementById('open');
let navi=document.getElementsByClassName('a');
let info=document.getElementById("info");
const openmenu=()=>{
    open.style.display="none";
    close.style.display="block";
    for(nav of navi){
        nav.style.display="block";
    }
    close.style.top="8%";
    info.style.marginTop="20%";
}
const closemenu=()=>{
    open.style.display="block";
    close.style.display="none";
    for(nav of navi){
        nav.style.display="none";
    }
    info.style.marginTop="83%";
}
