// HOME.js

const navbar = document.getElementById("navbar");

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("nav-links");

const navItems = document.querySelectorAll(".nav-item");

const sections = document.querySelectorAll("section");

const highlightSpan = document.querySelector(".highlight");


/*MOBILE MENU*/

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("show");
});


/*CLOSE MENU AFTER CLICK*/

navItems.forEach(item => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("show");
  });
});


/*NAVBAR SCROLL EFFECT*/

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");
  }

  else{

    navbar.classList.remove("scrolled");
  }


  /* ACTIVE NAV LINK */
  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 100;

    if(pageYOffset >= sectionTop){

      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {

    link.classList.remove("active");

    const hrefValue = link.getAttribute("href");

    if(hrefValue === `#${current}`){

      link.classList.add("active");
    }
  });
});


/*TYPING EFFECT*/

const text = "Priyanshu Kumar";

let index = 0;

function typeWriter(){

  if(highlightSpan && index < text.length){

    highlightSpan.textContent += text.charAt(index);

    index++;

    setTimeout(typeWriter,150);
  }
}


/*WINDOW LOAD*/

window.onload = () => {

  if(highlightSpan){

    highlightSpan.textContent = "";

    typeWriter();
  }
};

/*CONTACT FORM*/

/* =========================
   CONTACT FORM
========================= */

const form = document.getElementById("contact-form");

if(form){

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

      name: form.name.value,

      email: form.email.value,

      message: form.message.value
    };

    try{

      await fetch(

        "https://script.google.com/macros/s/AKfycbyAgDqaSS5cNjjXYucutLI__Wb-FGfNpmcATc58Cd-5oQPKBA5ipSCCSpBdRooXICNs/exec",

        {

          method:"POST",

          body:JSON.stringify(data)
        }
      );

      alert("Message Sent Successfully!");

      form.reset();
    }

    catch(error){

      alert("Something Went Wrong!");
    }

  });
}