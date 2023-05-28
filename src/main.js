import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion"

window.addEventListener("load", sidenVises);

//burgermenu 

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#topnav").classList.add("hidden");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  }
  
  function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#topnav").classList.toggle("hidden");
  
    let erSkjult = document
      .querySelector("#topnav")
      .classList.contains("hidden");
  
    if (erSkjult == true) {
      document.querySelector("#menuknap").textContent = "☰";
    } else {
      document.querySelector("#menuknap").innerHTML = "&#10005";
    }
  }

//animationer


inView( ".fadein1" , () =>{
animate( ".fadein1", { opacity: [ 0, 1] }, { duration: 4 })
})



inView( ".fadein2" , () =>{
  animate( ".fadein2", { opacity: [ 0, 1] }, { duration: 4 })
  })


inView( ".staggeranimation" , () =>{
animate(
  ".staggeranimation",
  { opacity: [0, 1] },
  { 
      delay: stagger(1, { start: 0.2 })
  }
)
})


animate( ".instantfadein", { opacity: [ 0, 1] }, { duration: 4 })


//cookie-boks. Starter fjernCookieboks funktionen ved tryk på en af knapperne

const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieboks);
denyCookie.addEventListener("click", fjernCookieboks);

function fjernCookieboks() {
  cookieboks.classList.add("hidden");
}

//det nedre stykke sørger for at hvis cookie-boksen er blevet lukket før dukker den ikke op igen
/*
  sessionStorage.setItem("fjernCookieboks", true);
}


if (sessionStorage.getItem("fjernCookieboks")) {
  cookieboks.classList.add("hidden");
}*/




